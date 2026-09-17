(() => {
  'use strict';
  if (document.body.dataset.category !== 'rice') return;

  const cloudinaryMarker = '/image/upload/';
  const qualityTransform = 'f_auto,q_auto:best,e_sharpen:70';

  function enhanceCloudinaryUrl(url) {
    const value = String(url || '');
    if (!value.includes('res.cloudinary.com/wy4nkkqq') || !value.includes(cloudinaryMarker)) return value;
    if (value.includes(`${cloudinaryMarker}${qualityTransform}/`)) return value;
    return value.replace(cloudinaryMarker, `${cloudinaryMarker}${qualityTransform}/`);
  }

  function refreshRiceImages() {
    document.querySelectorAll('.simple-product-zoom').forEach(button => {
      const image = button.querySelector('img');
      const original = button.dataset.zoomImage || image?.getAttribute('src') || '';
      const enhanced = enhanceCloudinaryUrl(original);
      if (!enhanced || enhanced === original && !image) return;

      button.dataset.zoomImage = enhanced;
      if (image && image.getAttribute('src') !== enhanced) {
        image.setAttribute('src', enhanced);
      }
    });
  }

  document.addEventListener('shama:product-simple-rendered', refreshRiceImages);
  document.addEventListener('shama:product-images-updated', () => setTimeout(refreshRiceImages, 0));

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshRiceImages, { once: true });
  } else {
    refreshRiceImages();
  }
})();
