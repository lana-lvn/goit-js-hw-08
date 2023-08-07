// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionsDelay: 250, captionsPosition: 'bottom' });

console.log(createGalleryMarkup(galleryItems));

function createGalleryMarkup(image) { 

    return galleryItems.map((image) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
 </li>`
    }).join(' ');
};
