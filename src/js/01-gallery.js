import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const galleryMarkup = document.querrySelector('.gallery');

const galleryEl = galleryItems
    .map(({ preview, original, description }) =>
        `<li class = "gallery__item">
    <a class = "gallery__link" href = "${original}">
    <img class = "gallery__image"
    src = "${preview}"
    data-source = "${original}"
    alt = "${description}"
    />
    </a>
    </li>`)
    .join("");

    gallery.addEventListener('click', onImgClick)

function onImgClick(evt) {
  evt.preventDefault();
  
  const itemLink = evt.target;
  if (evt.target.nodeName !== 'IMG') {
        return;
  }
  
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  console.dir(instance);

  galleryEl.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
