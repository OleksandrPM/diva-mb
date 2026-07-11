import { ServiceName } from "../types/services.types";

const btnTitleIfClose = "info & ceny";
const btnTitleIfOpen = "skrýt info";

export function showHideServices(key: keyof ServiceName): void {
  const servicesItemEl = document.querySelector<HTMLLIElement>(
    `.services__item[data-service="${key}"]`,
  );

  if (servicesItemEl) {
    toggleShowingInfo(servicesItemEl);
  }
}

function toggleShowingInfo(el: HTMLElement) {
  const tableEl = el.querySelector<HTMLTableElement>(".services__table");
  const buttonEl = el.querySelector<HTMLButtonElement>(
    ".services__show-more-btn",
  );
  const iconEls = el.querySelectorAll<SVGElement>(".services__show-more-icon");

  tableEl?.classList.toggle("active");

  if (buttonEl) {
    if (buttonEl.title === btnTitleIfClose) {
      buttonEl.title = btnTitleIfOpen;
    } else {
      buttonEl.title = btnTitleIfClose;
    }
  }

  iconEls.forEach((icon) => {
    icon.classList.toggle("active");
  });
}
