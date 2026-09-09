# Shama Website New 2026

Production is intentionally a single landing page at https://shamaonline.com/.

Live runtime:
- index.html
- landing.js
- landing CSS files listed in index.html
- Shama logo and the featured frozen product image
- worker.js redirects www and legacy page URLs to the canonical root

Stability rules:
- no translation runtime
- no legacy multi-page runtime
- no category video runtime or video build step
- mobile-first responsive overrides are in mobile-stability.css
- production deploy copies only files required by the landing page

The previous multi-page source was archived in branch `archive/pre-landing-cleanup-20260909` before cleanup. Obsolete multi-page files are removed from the production branch.
