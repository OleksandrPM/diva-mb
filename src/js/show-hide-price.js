const btnTitleIfFalse = 'zobrazit informace';
const btnTitleIfTrue = 'skrýt informace';
const btnTextIfFalse = 'Info a ceny';
const btnTextIfTrue = 'Skrýt info';

export function showHidePrice(id) {
  const masterEls = document.querySelectorAll('.master-container');

  masterEls.forEach(el => {
    if (el.dataset.id === id) {
      toggleContent(el);
      return;
    }
  });
}

function toggleContent(el) {
  const cardEl = el.querySelector('.master-card');
  const priceListEl = el.querySelector('.price-list');
  const btnEl = el.querySelector('.show-more__btn');
  const btnTextEl = el.querySelector('.show-more__text');
  const svgEl = el.querySelector('.show-more__icon');

  cardEl.classList.toggle('active');
  priceListEl.classList.toggle('active');
  svgEl.classList.toggle('active');

  if (btnTextEl.textContent === btnTextIfFalse) {
    btnEl.title = btnTitleIfTrue;
    btnTextEl.textContent = btnTextIfTrue;
  } else {
    btnEl.title = btnTitleIfFalse;
    btnTextEl.textContent = btnTextIfFalse;
  }
}
