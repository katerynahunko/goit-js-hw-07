import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const markupGallery = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image ${description}"
    />
  </a>
</li>`
);

gallery.insertAdjacentHTML("beforeend", markupGallery.join(""));
gallery.addEventListener("click", onClick);
console.log(gallery);

let instance = 0;

function onClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const original = event.target.dataset.source;
    const description = event.target.alt;

    instance = basicLightbox.create(
      `
      <img
        class="gallery__image"
        src="${original}"
        alt="Image ${description}"
      />
    `
    );

    instance.show();
    document.addEventListener("keydown", onEscKeyPress);
  }
}

function onEscKeyPress(event) {
  if (event.key === "Escape") {
    if (instance) {
      instance.close();
      document.removeEventListener("keydown", onEscKeyPress);
    }
  }
}
