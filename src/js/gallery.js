import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import localGalleryData from '../data/gallery.json';
import axios from 'axios';

const galleryDataURL =
  'https://docs.google.com/document/d/1niRxzdwKhhlSuL1fsHcZ9TC7vmh9UfuY0pXh0mILCnY/export?format=txt';

const galleryEl = document.querySelector('.portfolio__gallery');

let lightbox = new SimpleLightbox('.portfolio__gallery a');

axios(galleryDataURL)
  .then(response => {
    renderGallery(response.data);
  })
  .catch(e => {
    console.log(e.message);
    renderGallery(localGalleryData);
  });

function renderGallery(gallery) {
  const galleryMarkup = gallery
    .map(imgObj => {
      return buildGalleryItemMarkup(imgObj);
    })
    .join('');

  galleryEl.innerHTML = galleryMarkup;
  lightbox.refresh();
}

function buildGalleryItemMarkup(imgObj) {
  const { description, big_photo_URL, small_photo_URL, retina_photo_URL } =
    imgObj;
  const imgAlt = description ? description : 'Gallery image';

  if (big_photo_URL && small_photo_URL && retina_photo_URL) {
    return `<a href="${big_photo_URL}">
            <div class="portfolio__img-thumb">
              <img class="portfolio__img"
              srcset="
                ${small_photo_URL} 1x, 
                ${retina_photo_URL} 2x"
                src="${small_photo_URL}"
                min-width="170" 
                alt="${imgAlt}" 
                title="${description}" 
                loading="lazy" />
            </div>
          </a>`;
  }
}
