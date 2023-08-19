import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const markupGallery = galleryItems.map(
  ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
);

gallery.insertAdjacentHTML("beforeend", markupGallery.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: 250,
});