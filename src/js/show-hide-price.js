const btnTextIfFalse = "Info a ceny";
const btnTitleIfFalse = "zobrazit informace";

const btnTextIfTrue = "Skrýt info";
const btnTitleIfTrue = "skrýt informace";

export function showHidePrice(id) {
  const masterEls = document.querySelectorAll(".master-container");

  masterEls.forEach((el) => {
    if (el.dataset.id === id) {
      toggleContent(el);
      return;
    }
  });
}

function toggleContent(el) {
  const cardEl = el.querySelector(".master-card");
  const priceListEl = el.querySelector(".price-list");
  const btnEl = el.querySelector(".show-info-btn");
  const btnTextEl = el.querySelector(".show-info-btn__text");
  const svgEl = el.querySelector(".show-info-btn__icon");

  cardEl.classList.toggle("active");
  priceListEl.classList.toggle("active");
  svgEl.classList.toggle("active");

  if (btnTextEl.textContent === btnTextIfFalse) {
    btnEl.title = btnTitleIfTrue;
    btnTextEl.textContent = btnTextIfTrue;
  } else {
    btnEl.title = btnTitleIfFalse;
    btnTextEl.textContent = btnTextIfFalse;
  }
}
