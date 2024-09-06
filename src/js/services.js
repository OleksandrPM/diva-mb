import serviceList from '../data/service-list.json';
import { modalContentEl } from './modal';
import icons from '../images/icons.svg';

const servicesModalTitle = 'Vyberte službu:';

const modalTitleEl = document.querySelector('.modal__title');

export function renderServices() {
  modalTitleEl.textContent = servicesModalTitle;
  const serviceListKeys = Object.keys(serviceList);
  const items = serviceListKeys
    .map(key => {
      const { name, services } = serviceList[key];
      return buildServiceItem(key, name, services);
    })
    .join('');
  const servicesList = `<ul class='services'>${items}</ul>`;

  modalContentEl.innerHTML = servicesList;
}

function buildServiceItem(key, name, services) {
  return `<li class='services__item' data-service="${key}">
            <div class="services__item-head">
              <p class='service js-service-name' data-service="${key}">
              ${name}
              </p>
              ${buildShowMoreBtn(key)}
            </div>
            ${buildPriceTable(key, services)}
          </li>`;
}

function buildPriceTable(key, services) {
  return `<table class="services__table" data-service="${key}">
            <tbody>${services
              .map(({ name, price }) => {
                return `<tr>
                  <td class="name-column">${name}</td>
                  <td class="price-column">${price}</td>
                </tr>`;
              })
              .join('')}
            </tbody>
          </table>`;
}

function buildShowMoreBtn(key) {
  return `<button
      class="button services__show-more-btn js-services-show-more"
      data-service="${key}"
      title="info & ceny"
      type="button"
    >
      <svg class="services__show-more-icon unclick active" 
      data-service="${key}"
      width="28" height="28">
        <use href=${icons}#icon-plus></use>
      </svg>
      <svg class="services__show-more-icon unclick" 
      data-service="${key}"
      width="28" height="28">
        <use href=${icons}#icon-minus></use>
      </svg>
    </button>`;
}
