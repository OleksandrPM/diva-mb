import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

const mobMenuEl = document.querySelector('.js-mob-menu');

export function openMobMenu() {
  mobMenuEl.classList.add('mob-menu-open');
  window
    .matchMedia('(min-width: 768px)')
    .addEventListener('change', onWindowChange);
  disableBodyScroll(document.body);
}

export function closeMobMenu() {
  mobMenuEl.classList.remove('mob-menu-open');
  enableBodyScroll(document.body);
}

/* It`s a callback in "change" listener. 
Close the mobile menu on wider screens if the device orientation changes*/
function onWindowChange(event) {
  if (!event.matches) return;
  mobMenuEl.classList.remove('mob-menu-open');
  enableBodyScroll(document.body);
  window
    .matchMedia('(min-width: 768px)')
    .removeEventListener('change', onWindowChange);
}
