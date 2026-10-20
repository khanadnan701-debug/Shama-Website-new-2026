#!/usr/bin/env python3
"""One-time Cloudinary -> self-hosted Cloudflare static asset migration.

Original PNG backup stays unchanged in Google Drive. This script downloads
public Cloudinary originals, creates high-quality local WebP copies, and swaps
only Cloudinary URLs with verified local files. No product details are changed.
"""
import argparse
import concurrent.futures
import hashlib
import io
import json
import os
import re
import sys
import time
import unicodedata
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = ROOT / '.github' / 'data' / 'shama-cloudinary-inventory.json'
REPORT = ROOT / '.github' / 'data' / 'shama-cloudinary-migration-report.json'
DEST = ROOT / 'assets' / 'cloudinary-shama'
ORIGIN = 'https://res.cloudinary.com/wy4nkkqq/image/upload/'
CLOUD_RE = re.compile(r'https?://res\.cloudinary\.com/wy4nkkqq/image/upload/[^\s\'"`<>\\)]+', re.I)
VERSION_RE = re.compile(r'^v\d{7,}$')
VALID_EXT = {'.html', '.js', '.css', '.jsonc', '.svg'}
EXCLUDE = {'.git', '.github', 'node_modules', 'dist', 'assets', '.venv'}


def safe_name(value):
    value = unicodedata.normalize('NFKD', str(value)).encode('ascii', 'ignore').decode('ascii').lower()
    return re.sub(r'[^a-z0-9]+', '-', value).strip('-') or 'image'


def target_path(a):
    folder = a['asset_folder'].split('/', 1)[-1]
    components = [safe_name(x) for x in folder.split('/') if x.strip()]
    name = safe_name(a['public_id'])[:100]
    digest = hashlib.sha256(a['public_id'].encode('utf-8')).hexdigest()[:12]
    return DEST.joinpath(*components, f'{name}-{digest}.webp')


def get_public_id(url):
    try:
        s = urlsplit(url.rstrip('.,;'))
        if s.netloc.lower() != 'res.cloudinary.com':
            return None
        tail = unquote(s.path.split('/wy4nkkqq/image/upload/', 1)[1])
        segments = tail.split('/')
        version_indices = [i for i, x in enumerate(segments) if VERSION_RE.fullmatch(x)]
        if version_indices:
            segments = segments[version_indices[-1] + 1:]
        else:
            while len(segments) > 1 and (',' in segments[0] or re.match(r'^(?:c|f|q|w|h|e|d|g|ar|fl|b|r)_', segments[0])):
                segments.pop(0)
        pid = '/'.join(segments)
        if '.' in pid:
            pid = pid.rsplit('.', 1)[0]
        return pid or None
    except (ValueError, IndexError, KeyError):
        return None


def source_files():
    for p in ROOT.rglob('*'):
        if not p.is_file() or p.suffix.lower() not in VALID_EXT:
            continue
        if set(p.relative_to(ROOT).parts) & EXCLUDE:
            continue
        if p.name.endswith('.min.js'):
            continue
        yield p


def inventory():
    data = json.loads(MANIFEST.read_text(encoding='utf-8'))
    entries = data['assets']
    assert len(entries) >= 780, f'Incomplete source inventory ({len(entries)} assets)'
    assert len(set(x['public_id'] for x in entries)) == len(entries), 'Duplicate public IDs'
    assert all(x['secure_url'].startswith(ORIGIN) for x in entries), 'Unsafe source URL'
    assert all(x['format'] == 'png' for x in entries), 'Unexpected media type'
    assert all(str(x['asset_folder']).lower().startswith('shama/') for x in entries), 'Non-Shama asset found'
    assert len(set(str(target_path(x)) for x in entries)) == len(entries), 'Output name collision'
    return entries


def make_lookup(entries):
    exact = {x['public_id']: x for x in entries}
    aliases = {}
    for x in entries:
        k = x['public_id'].casefold()
        aliases.setdefault(k, []).append(x)
    return exact, aliases


def find_matches(entries):
    exact, aliases = make_lookup(entries)
    references, unresolved, files = [], [], {}
    for p in source_files():
        content = p.read_text(encoding='utf-8', errors='replace')
        found = list(CLOUD_RE.finditer(content))
        if not found:
            continue
        files[p] = content
        for match in found:
            url = match.group(0).rstrip('.,;')
            pid = get_public_id(url)
            asset = exact.get(pid)
            if asset is None and pid:
                candidates = aliases.get(pid.casefold(), [])
                if len(candidates) == 1:
                    asset = candidates[0]
            if asset is None:
                unresolved.append({'file': str(p.relative_to(ROOT)), 'public_id': pid, 'url': url})
            else:
                references.append({'file': str(p.relative_to(ROOT)), 'public_id': asset['public_id']})
    return references, unresolved, files


def check_webp(path):
    if not path.is_file() or path.stat().st_size < 100:
        return False
    try:
        from PIL import Image
        with Image.open(path) as im:
            return im.format == 'WEBP' and im.width > 0 and im.height > 0
    except Exception:
        return False


def download_convert(asset):
    from PIL import Image, ImageOps
    import requests
    output = target_path(asset)
    if check_webp(output):
        return {'id': asset['public_id'], 'status': 'cached', 'bytes': output.stat().st_size}

    output.parent.mkdir(parents=True, exist_ok=True)
    original_url = asset['secure_url']
    expected = int(asset.get('bytes') or 0)
    limit = max(14_000_000, expected + 2_000_000)
    err = ''
    for attempt in range(3):
        temp = output.with_suffix('.partial')
        try:
            with requests.get(original_url, stream=True, timeout=(20, 120), headers={'User-Agent': 'ShamaImageBackupMigration/1.0'}) as response:
                response.raise_for_status()
                data, total = [], 0
                for chunk in response.iter_content(chunk_size=262144):
                    if chunk:
                        total += len(chunk)
                        if total > limit:
                            raise ValueError(f'Download exceeded per-file safety limit ({limit})')
                        data.append(chunk)
            if total < 100 or not data:
                raise ValueError('Empty image download')
            with Image.open(io.BytesIO(b''.join(data))) as original:
                if original.format != 'PNG':
                    raise ValueError(f'Expected PNG, received {original.format}')
                original.load()
                picture = ImageOps.exif_transpose(original)
                banner = 'banner' in asset['asset_folder'].casefold()
                max_side = 2700 if banner else 1800
                if max(picture.size) > max_side:
                    picture.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
                if 'A' in picture.getbands() or 'transparency' in picture.info:
                    picture = picture.convert('RGBA')
                else:
                    picture = picture.convert('RGB')
                picture.save(temp, 'WEBP', quality=90, method=4)
            if not check_webp(temp):
                raise ValueError('Generated WebP could not be decoded')
            os.replace(temp, output)
            return {'id': asset['public_id'], 'status': 'downloaded', 'bytes': output.stat().st_size}
        except Exception as exc:
            err = str(exc)[:240]
            if temp.exists():
                temp.unlink()
            if attempt < 2:
                time.sleep(2 ** attempt + 1)
    return {'id': asset['public_id'], 'status': 'failed', 'error': err}


def replace_references(entries):
    exact, aliases = make_lookup(entries)
    replaced = 0
    unresolved = []
    changed_files = 0
    for path in source_files():
        text = path.read_text(encoding='utf-8', errors='replace')
        if 'res.cloudinary.com/wy4nkkqq/image/upload/' not in text:
            continue

        def swap(match):
            nonlocal replaced
            full = match.group(0)
            url = full.rstrip('.,;')
            punct = full[len(url):]
            pid = get_public_id(url)
            a = exact.get(pid)
            if a is None and pid:
                candidates = aliases.get(pid.casefold(), [])
                if len(candidates) == 1:
                    a = candidates[0]
            if a is None or not check_webp(target_path(a)):
                unresolved.append({'file': str(path.relative_to(ROOT)), 'public_id': pid, 'url': url})
                return full
            replaced += 1
            return '/' + target_path(a).relative_to(ROOT).as_posix() + punct

        new_text = CLOUD_RE.sub(swap, text)
        if new_text != text:
            path.write_text(new_text, encoding='utf-8')
            changed_files += 1
    return replaced, changed_files, unresolved


def verify(entries):
    missing = [x['public_id'] for x in entries if not check_webp(target_path(x))]
    _, unresolved, _ = find_matches(entries)
    local_refs = 0
    broken_local = []
    pattern = re.compile(r'/assets/cloudinary-shama/[A-Za-z0-9_./-]+\.webp')
    for path in source_files():
        content = path.read_text(encoding='utf-8', errors='replace')
        for m in pattern.finditer(content):
            local_refs += 1
            target = ROOT / m.group(0).lstrip('/')
            if not check_webp(target):
                broken_local.append({'file': str(path.relative_to(ROOT)), 'path': m.group(0)})
    return {'missing_mirror_files': missing, 'unresolved_cloudinary_refs': unresolved, 'local_refs': local_refs, 'broken_local_refs': broken_local}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--preflight', action='store_true')
    parser.add_argument('--verify', action='store_true')
    args = parser.parse_args()
    entries = inventory()

    if args.preflight:
        good, unknown, files = find_matches(entries)
        print(json.dumps({'mode': 'preflight', 'assets': len(entries), 'source_files_with_cloudinary': len(files), 'matched_references': len(good), 'unmatched_references': len(unknown), 'unmatched_examples': unknown[:25]}, indent=2))
        return

    if args.verify:
        state = verify(entries)
        print(json.dumps({k: (v[:20] if isinstance(v,list) else v) for k,v in state.items()}, indent=2))
        if state['missing_mirror_files'] or state['broken_local_refs']:
            raise SystemExit('Verification failed: missing or broken local image files')
        print(f'Verified {len(entries)} mirrored files and {state["local_refs"]} local image references.')
        return

    print(f'Migrating {len(entries)} Cloudinary original PNGs to self-hosted WebP assets', flush=True)
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=7) as pool:
        futures = {pool.submit(download_convert, a): a for a in entries}
        for i, future in enumerate(concurrent.futures.as_completed(futures), 1):
            result = future.result()
            results.append(result)
            if i % 50 == 0 or result['status'] == 'failed' or i == len(entries):
                failures = sum(x['status'] == 'failed' for x in results)
                print(f'  {i}/{len(entries)} processed; failed={failures}', flush=True)

    summary = Counter(x['status'] for x in results)
    if summary['failed']:
        for x in results:
            if x['status'] == 'failed':
                print('::error::Could not back up ' + x['id'] + ': ' + x.get('error',''), flush=True)
        raise SystemExit(f'{summary["failed"]} originals could not be mirrored. Production source files have not been changed.')

    replaced, files, unresolved = replace_references(entries)
    state = verify(entries)
    report = {
        'date': datetime.now(timezone.utc).isoformat(),
        'cloudinary_assets': len(entries),
        'downloaded': summary['downloaded'],
        'already_cached': summary['cached'],
        'mirrored_webp_bytes': sum(int(x['bytes']) for x in results if x.get('bytes')),
        'references_replaced': replaced,
        'source_files_modified': files,
        'unmapped_references': state['unresolved_cloudinary_refs'],
        'broken_local_references': state['broken_local_refs'],
        'missing_mirror_files': state['missing_mirror_files'],
    }
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({k:(v[:15] if isinstance(v,list) else v) for k,v in report.items()}, indent=2), flush=True)
    if state['missing_mirror_files'] or state['broken_local_refs']:
        raise SystemExit('Migration verification failed. Do not deploy.')
    if state['unresolved_cloudinary_refs']:
        print(f'::warning::{len(state["unresolved_cloudinary_refs"])} references still need manual mapping before cancelling Cloudinary.', flush=True)
    print('Migration files verified. Originals in Google Drive have not been modified.', flush=True)


if __name__ == '__main__':
    main()
