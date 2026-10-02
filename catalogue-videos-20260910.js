(() => {
  'use strict';
  if (document.body.dataset.page !== 'catalogue') return;

  const removeCatalogueVideos = () => {
    document.querySelectorAll(
      '.catalogue-preview-video, .preview-video-pill, .catalogue-video, video[data-catalogue-video]'
    ).forEach(node => node.remove());

    document.querySelectorAll('.video-ready').forEach(node => node.classList.remove('video-ready'));

    document.querySelectorAll('.catalogue-preview .preview-frame video').forEach(node => node.remove());

    // Catalogue media must stay image-only.
    document.querySelectorAll('.grocery-catalogue video').forEach(node => node.remove());
  };

  removeCatalogueVideos();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeCatalogueVideos, { once:true });
  }

  const observer = new MutationObserver(removeCatalogueVideos);
  observer.observe(document.documentElement, { childList:true, subtree:true });
  window.setTimeout(() => observer.disconnect(), 5000);
})();