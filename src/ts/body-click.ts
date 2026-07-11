import { switchCurrentNavLink } from "./current-navlink-switcher";
import { closeMobMenu, openMobMenu } from "./mobile-menu";
import { closeModal, openModal, renderServices } from "./modal";
import { showHideServices } from "./show-hide-services";
import { showHidePrice } from "./show-hide-price";
import {
  renderFilteredTeamByService,
  renderFilteredTeamBySubservice,
} from "./team";
import { closeAdvertisingBlock } from "./advertising";
import { ServiceName, SubServiceName } from "../types/services.types";

export function onDocumentClick(event: MouseEvent): void {
  switchCurrentNavLink(event);

  const target = event.target as HTMLElement;

  if (target.classList.contains("js-open-mob-menu")) {
    openMobMenu();
    return;
  }

  if (
    target.classList.contains("js-close-menu") ||
    target.classList.contains("js-nav__link--mobile") ||
    target.classList.contains("mob-menu__logo-link")
  ) {
    closeMobMenu();
    return;
  }

  if (target.classList.contains("book-btn")) {
    renderServices();
    openModal();
    return;
  }

  if (target.classList.contains("js-services-show-more")) {
    const key = target.dataset.service as keyof ServiceName;

    showHideServices(key);
    return;
  }

  if (
    target.classList.contains("js-modal-close") ||
    target.classList.contains("js-backdrop")
  ) {
    closeModal();
    return;
  }

  if (target.classList.contains("js-advertising-close")) {
    closeAdvertisingBlock();
    return;
  }

  if (target.classList.contains("js-service-title")) {
    const serviceName = target.dataset.service;

    if (serviceName) {
      renderFilteredTeamByService(serviceName as keyof ServiceName);
    }

    return;
  }

  const row = (target as HTMLElement).closest(".js-subservice");

  if (row instanceof HTMLTableRowElement) {
    const subServiceName = row.dataset.subservice;

    if (subServiceName) {
      renderFilteredTeamBySubservice(
        subServiceName as SubServiceName[keyof ServiceName],
      );
    }

    return;
  }

  if (target.classList.contains("js-show-info")) {
    const id = target.dataset.id;
    showHidePrice(id);
    return;
  }
}
