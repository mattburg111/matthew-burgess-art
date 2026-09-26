const lightbox = document.querySelector('.lightbox');

if (lightbox) {
  const enlargedImage = lightbox.querySelector('img');
  let opener = null;

  document.querySelectorAll('.detail-image').forEach((button) => {
    button.addEventListener('click', () => {
      const image = button.querySelector('img');
      enlargedImage.src = image.currentSrc || image.src;
      enlargedImage.alt = image.alt;
      opener = button;
      lightbox.showModal();
      opener.setAttribute('aria-expanded', 'true');
      document.documentElement.classList.add('lightbox-open');
    });
  });

  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.querySelector('.lightbox-image').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  // Native dialog behavior handles Escape and keeps keyboard focus in the overlay.
  lightbox.addEventListener('close', () => {
    document.documentElement.classList.remove('lightbox-open');
    if (opener) {
      opener.setAttribute('aria-expanded', 'false');
      opener.focus({ preventScroll: true });
      opener = null;
    }
  });
}
