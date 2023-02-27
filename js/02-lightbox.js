import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImgContainer = document.querySelector(".gallery");
const markupImg = createMarkupImg(galleryItems);

galleryImgContainer.insertAdjacentHTML("beforeend", markupImg);
galleryImgContainer.addEventListener("click", galleryImgContainerClick);

function createMarkupImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<ul class="gallery__item">
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
       </ul> `;
    })
    .join("");
}
function galleryImgContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


console.log(galleryItems);
