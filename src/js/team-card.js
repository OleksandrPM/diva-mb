import { nanoid } from "nanoid";
import {
  teamDefPhotos,
  teamNormPhotos,
  teamRetinaPhotos,
} from "../images/team";
import avatar from "../images/team/girl-profile.png";
import icons from "../images/icons.svg";
import { buildSocialsList } from "./socials-icons";

export default function buildMasterContainer(master) {
  const {
    contacts: { phone },
  } = master;
  const id = nanoid(10);

  return `<div class="master-container" data-id="${id}">
            <div class="master-container__content">
              ${buildMasterCard(master, id)}
              ${buildPriceList(master, id)}
            </div>
           ${buildShowMoreBtn(id)}
           ${buildCallmeBtn(phone)}
          </div>`;
}

function buildMasterCard(master, id) {
  const { photo, name, specialization, socials } = master;
  const defPhotoIndex = getPhotoIndex(photo, teamDefPhotos);
  const normPhotoIndex = getPhotoIndex(photo, teamNormPhotos);
  const retinaPhotoIndex = getPhotoIndex(photo, teamRetinaPhotos);

  return `<div class="master-card active" data-id="${id}">
    <div class="master-card__img-container">
      <img class="master-card__image" 
        srcset="
        ${normPhotoIndex !== -1 ? teamNormPhotos[normPhotoIndex] : avatar} 1x, 
        ${
          retinaPhotoIndex !== -1 ? teamRetinaPhotos[retinaPhotoIndex] : avatar
        } 2x"
        src=${defPhotoIndex !== -1 ? teamDefPhotos[defPhotoIndex] : avatar}
        min-width="270"
        alt="Photo of ${name}" 
        loading="lazy"
      />
    </div>
    <h3 class="master-card__title">${name}</h3>
    <p class="master-card__article">${specialization}</p>
    ${buildSocialsList(socials)}  
  </div>`;
}

function buildPriceList(master, id) {
  const { price_list: priceList, other: info } = master;

  const services = Object.keys(priceList);

  const pricesMarkup = services
    .map((service) => {
      const { name, services } = priceList[service];
      return `<h3 class="price-list__title">${name}</h3>
      <table>
        <thead>
          <tr><th>Služba</th><th class="t-column-price">Cena, Kč</th></tr>
        </thead>
        <tbody>${services
          .map(({ name, price }) => {
            return `<tr><td>${name}</td><td>${price}</td></tr>`;
          })
          .join("")}
        </tbody>
      </table>`;
    })
    .join("");

  return `<div class="price-list scrollable" data-id="${id}">
  ${pricesMarkup}
  <p>${info}</p>
  </div>`;
}

function buildCallmeBtn(phone) {
  if (phone) {
    return ` <a href="tel:${phone}" class="button phone-btn" title="zavolat">
    <svg class="phone-icon" viewBox="0 0 32 32" width="32" height="32" >
    <use href="${icons}#icon-phone"></use>
    </svg>
    </a>`;
  } else {
    return "";
  }
}

function buildShowMoreBtn(id) {
  return `<button 
  class="button show-more__btn js-show-more" 
  type="button"
  data-id="${id}" 
  title="zobrazit informace">
  <span class="show-more__text js-show-more" data-id="${id}">Info a ceny</span>
  <svg class="show-more__icon unclick" data-id="${id}" viewBox="0 0 32 32" width="20" height="20" >
    <use href="${icons}#icon-up-arrow"></use>
    </svg>
  </button>`;
}

function getPhotoIndex(photoName, photos) {
  return photos.findIndex((photo) => photo.toString().includes(photoName));
}
