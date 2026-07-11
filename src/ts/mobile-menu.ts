import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

const mobMenuEl = document.querySelector(".js-mob-menu");
const mediaQuery = window.matchMedia("(min-width: 768px)");

export function openMobMenu() {
  if (!mobMenuEl) return;

  mobMenuEl.classList.add("mob-menu-open");
  mediaQuery.addEventListener("change", onWindowChange);
  disableBodyScroll(document.body);
}

export function closeMobMenu() {
  if (!mobMenuEl) return;

  mobMenuEl.classList.remove("mob-menu-open");
  mediaQuery.removeEventListener("change", onWindowChange);
  enableBodyScroll(document.body);
}

/* It`s a callback in "change" listener. 
Close the mobile menu on wider screens if the device orientation changes*/
function onWindowChange(event: MediaQueryListEvent) {
  if (!event.matches) return;

  closeMobMenu();
}
