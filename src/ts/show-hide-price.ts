const btnTextIfFalse = "Info a ceny";
const btnTitleIfFalse = "zobrazit informace";

const btnTextIfTrue = "Skrýt info";
const btnTitleIfTrue = "skrýt informace";

export function showHidePrice(id: string) {
  const el = [
    ...document.querySelectorAll<HTMLElement>(".master-container"),
  ].find((el) => el.dataset.id === id);

  if (el) {
    toggleContent(el);
  }
}

function toggleContent(el: Element) {
  const cardEl = el.querySelector<HTMLElement>(".master-card");
  const priceListEl = el.querySelector<HTMLElement>(".price-list");
  const btnEl = el.querySelector<HTMLElement>(".show-info-btn");
  const btnTextEl = el.querySelector<HTMLElement>(".show-info-btn__text");
  const svgEl = el.querySelector<HTMLElement>(".show-info-btn__icon");

  if (!cardEl || !priceListEl || !btnEl || !btnTextEl || !svgEl) {
    return;
  }

  const showPriceList = !priceListEl.classList.contains("active");

  cardEl.classList.toggle("active", !showPriceList);
  priceListEl.classList.toggle("active", showPriceList);
  svgEl.classList.toggle("active", showPriceList);

  btnEl.title = showPriceList ? btnTitleIfTrue : btnTitleIfFalse;
  btnTextEl.textContent = showPriceList ? btnTextIfTrue : btnTextIfFalse;
}
