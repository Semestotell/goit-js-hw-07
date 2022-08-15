import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const body = document.querySelector('body');

function markup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
    })
    .join('');
}
galleryContainer.innerHTML = markup(galleryItems);

let instance;
galleryContainer.addEventListener('click', onClickImg);
function onClickImg(event) {
    event.preventDefault();
    const img = event.target;
    if (!img.classList.contains('gallery__image')) {
    return;
    }
    instance = basicLightbox.create(`<img src="${img.dataset.source}">`);
    instance.show(onShow);
}
function onShow(instance) {
    body.style.overflow = 'hidden';
}


