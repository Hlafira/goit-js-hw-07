import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createMarkupGallery = () => {
  return galleryItems.reduce(
    (markup, { preview, original, description }) =>
      (markup += `<div class="gallery__item">
        <a class="gallery__link" href="${preview}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
  </a>
  </div>`),
    ""
  );
};

const changeModalImage = (img) => {
  const source = img.dataset.source;
  const description = img.alt;
  lightboxImg.src = source;
  lightboxImg.alt = description;
};

const onSmallImageClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName.toLowerCase() != "img") {
    return;
  }
  changeModalImage(event.target);
  instance.show();
};

const closeLightBoxOnEscape = (event) => {
  if (instance.visible() && event.key === "Escape") {
    instance.close();
  }
  console.log("close");
};

function addBtnListenerOnShow() {
  document.addEventListener("keydown", closeLightBoxOnEscape);
}

function removeBtnListenerOnClose() {
  document.removeEventListener("keydown", closeLightBoxOnEscape);
}

const instance = basicLightbox.create(
  `<img src="" width="1280" height="853" alt="" loading= "lazy">`,
  {
    onShow: addBtnListenerOnShow,
    onClose: removeBtnListenerOnClose,
  }
);

const lightboxImg = instance.element().querySelector("img");

const rootGallery = document.querySelector(".gallery");

const markupGallery = createMarkupGallery();
rootGallery.insertAdjacentHTML("beforeend", markupGallery);
rootGallery.addEventListener("click", onSmallImageClick);
