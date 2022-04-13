// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview: previewImg, original: originalImg, description: alt }) =>
      `
                <a class="gallery__item" href="${originalImg}">
                    <img class="gallery__image" src="${previewImg}" alt="${alt}"/>
                </a>
            `
  )
  .join("");

galleryContainer.innerHTML = galleryMarkup;

const gallery = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox");