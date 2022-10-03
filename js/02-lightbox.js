import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

`<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>`;

const gallery = document.querySelector(".gallery");

const createMarkupGallery = () => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description} " />
</a>`;
    })
    .join("\n");
};

console.log(createMarkupGallery());
gallery.innerHTML = createMarkupGallery();

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
