import { switchCurrentNavLink } from "./current-navlink-switcher";
import { closeMobMenu, openMobMenu } from "./mobile-menu";
import { closeModal, openModal } from "./modal";
import { renderServices } from "./services";
import { showHideServices } from "./show-hide-services";
import { showHidePrice } from "./show-hide-price";
import { renderFilteredTeamList } from "./team";
import { closeAdvertisingBlock } from "./advertising";

document.addEventListener("click", onDocumentClick);

function onDocumentClick(event) {
  switchCurrentNavLink(event);

  const elClasses = event.target.classList.value;

  if (elClasses.includes("js-open-mob-menu")) {
    openMobMenu();
    return;
  }

  if (
    elClasses.includes("js-close-menu") ||
    elClasses.includes("js-nav__link--mobile") ||
    elClasses.includes("mob-menu__logo-link")
  ) {
    closeMobMenu();
    return;
  }

  if (elClasses.includes("book-btn")) {
    renderServices();
    openModal();
    return;
  }

  if (elClasses.includes("js-services-show-more")) {
    const key = event.target.dataset.service;
    showHideServices(key);
    return;
  }

  if (
    elClasses.includes("js-modal-close") ||
    elClasses.includes("js-backdrop")
  ) {
    closeModal();
    return;
  }

  if (elClasses.includes("js-advertising-close")) {
    closeAdvertisingBlock();
    return;
  }

  if (elClasses.includes("js-service-name")) {
    const filter = event.target.dataset.service;
    renderFilteredTeamList(filter);
    return;
  }

  if (elClasses.includes("js-show-more")) {
    const id = event.target.dataset.id;
    showHidePrice(id);
    return;
  }
}
