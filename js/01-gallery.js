import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImgContainer = document.querySelector(".gallery");
const markupImg = createMarkupImg(galleryItems);

galleryImgContainer.insertAdjacentHTML("beforeend", markupImg);
galleryImgContainer.addEventListener("click", galleryImgContainerClick);

function createMarkupImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
            alt="${description}"
           />
         </a>
       </div> `;
    })
    .join("");
}

function galleryImgContainerClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const currentImgUrl = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `
		<img src="${currentImgUrl}" width="1280" height="auto"/>
        `,
    {
      onShow: (instance) => {
       document.addEventListener("keydown", onEscKey);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscKey);
      },
    }
  );
  instance.show();

  function onEscKey(evt) {
    if (evt.code !== "Escape") return;
    instance.close();
  }
}
console.log(galleryItems);
