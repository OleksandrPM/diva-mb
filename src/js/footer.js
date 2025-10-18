const yearsEl = document.querySelector(".footer__years");

const currentYear = new Date().getFullYear();
const startYear = 2023;

yearsEl.textContent =
  startYear === currentYear ? `${startYear}` : `${startYear} - ${currentYear}`;
