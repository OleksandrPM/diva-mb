const btnTitleIfClose = 'info & ceny';
const btnTitleIfOpen = 'skrýt info';

export function showHideServices(key) {
  const servicesItemEls = document.querySelectorAll('.services__item');
  servicesItemEls.forEach(item => {
    if (item.dataset.service === key) {
      toggleShowingInfo(item);
      return;
    }
  });
}

function toggleShowingInfo(el) {
  const tableEl = el.querySelector('.services__table');
  const buttonEl = el.querySelector('.services__show-more-btn');
  const iconEls = el.querySelectorAll('.services__show-more-icon');

  tableEl.classList.toggle('active');
  if (buttonEl.title === btnTitleIfClose) {
    buttonEl.title = btnTitleIfOpen;
  } else {
    buttonEl.title = btnTitleIfClose;
  }

  iconEls.forEach(icon => {
    icon.classList.toggle('active');
  });
}
