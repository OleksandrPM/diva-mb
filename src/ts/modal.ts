import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { buildServiceList } from "./services";

const backdropEl = document.querySelector<HTMLDivElement>(".js-backdrop");
const modalTitleEl = document.querySelector<HTMLElement>(".modal__title");
const modalContentEl =
  backdropEl?.querySelector<HTMLDivElement>(".js-modal-content");

export function openModal() {
  backdropEl?.classList.remove("backdrop--is-hidden");
  disableBodyScroll(document.body);
}

export function closeModal() {
  backdropEl?.classList.add("backdrop--is-hidden");

  if (modalContentEl) {
    modalContentEl.innerHTML = "";
  }

  enableBodyScroll(document.body);
}

export function renderServices(): void {
  const servicesModalTitle = "Vyberte službu:";

  if (modalContentEl && modalTitleEl) {
    modalTitleEl.textContent = servicesModalTitle;
    modalContentEl.innerHTML = buildServiceList();
  }
}
