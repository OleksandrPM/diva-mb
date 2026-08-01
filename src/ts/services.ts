import { services } from "../data/services.data";
import { icons } from "./images";

export function buildServiceList(): string {
  const serviceKeys = Object.keys(services) as (keyof typeof services)[];
  const items = serviceKeys
    .map((key) => {
      const { name, prices } = services[key];
      return buildServiceItem(key, name, prices);
    })
    .join("");

  return `<ul class='services'>${items}</ul>`;
}

function buildServiceItem(
  key: keyof typeof services,
  name: (typeof services)[typeof key]["name"],
  prices: (typeof services)[typeof key]["prices"],
): string {
  return `<li class='services__item' data-service="${key}">
            <div class="services__item-head">
              <h3 class='service-title js-service-title' data-service="${key}">
              ${name}
              </h3>
              ${buildShowMoreBtn(key)}
            </div>
            ${buildPriceTable(key, prices)}
          </li>`;
}

function buildPriceTable(
  key: keyof typeof services,
  prices: (typeof services)[typeof key]["prices"],
): string {
  return `<table class="services__table" data-service="${key}">
            <tbody>${prices
              .map(({ name, price }) => {
                return `<tr class="js-subservice" data-subservice="${name.replace(/"/g, "&quot;")}">
                  <td class="name-column">${name}</td>
                  <td class="price-column">${price}</td>
                </tr>`;
              })
              .join("")}
            </tbody>
          </table>`;
}

function buildShowMoreBtn(key: keyof typeof services): string {
  return `<button
      class="button services__show-more-btn js-services-show-more"
      data-service="${key}"
      title="info & ceny"
      type="button"
    >
      <svg class="services__show-more-icon unclick active" 
      data-service="${key}"
      width="32" height="32">
        <use href=${icons}#icon-plus></use>
      </svg>
      <svg class="services__show-more-icon unclick" 
      data-service="${key}"
      width="32" height="32">
        <use href=${icons}#icon-minus></use>
      </svg>
    </button>`;
}
