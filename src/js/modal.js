import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const backdropEl = document.querySelector('.js-backdrop');
export const modalContentEl = backdropEl.querySelector('.js-modal-content');

export function openModal() {
  backdropEl.classList.remove('backdrop--is-hidden');
  disableBodyScroll(document.body);
}

export function closeModal() {
  backdropEl.classList.add('backdrop--is-hidden');
  modalContentEl.innerHTML = '';
  enableBodyScroll(document.body);
}
