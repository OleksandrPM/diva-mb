const yearsEl = document.querySelector<HTMLElement>(".footer__years");

const currentYear = new Date().getFullYear();
const startYear = 2023;

export function setFooterDate(): void {
  if (yearsEl) {
    yearsEl.textContent =
      startYear === currentYear
        ? `${startYear}`
        : `${startYear} - ${currentYear}`;
  }
}
