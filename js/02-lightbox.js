import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function makeGalleryItemsMakrup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      `
    )
    .join("");
}


galleryEl.innerHTML = makeGalleryItemsMakrup(galleryItems);

var lightbox = new SimpleLightbox('.gallery a.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250
});
