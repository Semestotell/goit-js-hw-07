import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

function markup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `;
    })
    .join('');
}

galleryContainer.innerHTML = markup(galleryItems);
const gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });