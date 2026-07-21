import { nanoid } from "nanoid";
import { teamAvatar, icons } from "./images";
import { buildSocialsList } from "./socials-icons";
import { MemberPrices, TeamMemberWithPhoto } from "../types/team.types";
import { ServiceName } from "../types/services.types";

export default function buildMasterContainer(
  master: TeamMemberWithPhoto,
): string {
  const {
    contacts: { phone: phoneNumber, email },
    price_list: priceList,
  } = master;
  const id = nanoid(10);

  return `<div class="master-container" data-id="${id}">
            <div class="master-container__content">
              ${buildMasterCard(master, id)}
              ${buildPriceList(priceList, id)}
            </div>
           ${buildShowInfoBtn(id)}
           ${phoneNumber ? buildCallmeBtn(phoneNumber) : ""}
           ${email ? buildEmailBtn(email) : ""}
          </div>`;
}

function buildMasterCard(master: TeamMemberWithPhoto, id: string) {
  const {
    photo_set: { def, x1: norm, x2: retina },
    name,
    specialization,
    socials,
  } = master;

  return `<div class="master-card active" data-id="${id}">
    <div class="master-card__img-container">
      <img class="master-card__image"
        src="${def ? def : teamAvatar}"
        srcset="${norm ? norm : teamAvatar} 1x, ${
          retina ? retina : teamAvatar
        } 2x"
        alt="Photo of ${name}"
        loading="lazy"
      />
    </div>
    <h3 class="master-card__title">${name}</h3>
    <p class="master-card__article">${specialization}</p>
    ${buildSocialsList(socials)}
  </div>`;
}

function buildPriceList(priceList: MemberPrices, id: string): string {
  const { services, add_info: info } = priceList;

  if (!services) {
    return "";
  }

  const serviceKeys = Object.keys(services) as (keyof ServiceName)[];

  const pricesMarkup = serviceKeys
    .map((serviceKey) => {
      const service = services[serviceKey];

      if (!service) {
        return "";
      }

      const { name, prices } = service;

      return `<h3 class="price-list__title">${name}</h3>
      <table>
        <thead>
          <tr><th>Služba</th><th class="t-column-price">Cena, Kč</th></tr>
        </thead>
        <tbody>${prices
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

function buildEmailBtn(email: string): string {
  return `<a href="mailto:${email}" class="button email-btn" title="napsat e-mail">
    <svg class="email-icon" viewBox="0 0 32 32" width="32" height="32" >
    <use href="${icons}#icon-envelope"></use>
    </svg>
    </a>`;
}

function buildCallmeBtn(phoneNumber: string) {
  return `<a href="tel:${phoneNumber}" class="button phone-btn" title="zavolat">
    <svg class="phone-icon" viewBox="0 0 32 32" width="32" height="32" >
    <use href="${icons}#icon-phone"></use>
    </svg>
    </a>`;
}

function buildShowInfoBtn(id: string) {
  return `<button 
  class="button show-info-btn js-show-info" 
  type="button"
  data-id="${id}" 
  title="zobrazit informace">
  <span class="show-info-btn__text unclick" data-id="${id}">Info a ceny</span>
  <svg class="show-info-btn__icon unclick" data-id="${id}" viewBox="0 0 32 32" width="20" height="20" >
    <use href="${icons}#icon-up-arrow"></use>
    </svg>
  </button>`;
}
