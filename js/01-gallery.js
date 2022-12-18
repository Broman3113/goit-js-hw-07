import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = makeGalleryItemsMakrup(galleryItems);

galleryEl.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  openModalWithValue(e.target.dataset.source);
}

function makeGalleryItemsMakrup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `
    )
    .join("");
}

function openModalWithValue(value) {
  const imageModal = basicLightbox.create(`
    <img src="${value}" width="800" height="600">`);

  imageModal.show();
  window.addEventListener("keydown", onEscapePressedInModal);

  function onEscapePressedInModal(e) {
    if (!(e.code === "Escape")) {
      return;
    }
    imageModal.close();
    window.removeEventListener("keydown", onEscapePressedInModal);
    console.log(e);
  }
}
