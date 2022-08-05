import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".lightbox");
const modalImg = document.querySelector(".lightbox__image");

const markup = galleryItems.map(
    ({ preview, description, original}, index) =>
        `<li class= "gallery__item">
        <a class="gallery__item" href="">
        <img class="gallery__image" src="${preview}" alt="${description} data-source="${original}" data-index="${index}"/>
        </a>
        </li>`
)
    .join('');
gallery.insertAdjacentHTML('afterbegin', markup);

const openModal = e => {
    e.preventDefault()
    if (e.target.localName === "img") {
        modalImg.alt = e.target.alt;
        modalImg.src = e.target.dataset.source;
        modalImg.dataset.index = e.target.dataset.index;

        modal.classList.add("is-open");
    }
};
gallery.addEventListener('click', openModal);