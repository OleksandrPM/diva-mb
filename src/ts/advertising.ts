import { advertising } from "../data/advertising.data";
import { AdvertisingData } from "../types/advertising.types";

const advertisingEl = document.querySelector<HTMLElement>(".advertising");
const contentEl = advertisingEl?.querySelector<HTMLElement>(
  ".advertising__content",
);

export function renderAdvertising(): void {
  try {
    if (!advertisingEl || !contentEl) {
      throw new Error("Advertising elements not found");
    }

    if (advertising.text) {
      buildAdvertisingMarkup(advertising);
      advertisingEl.style.display = "block";
    }
  } catch (error) {
    console.error(
      `Cannot load advertising info. ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
}

function buildAdvertisingMarkup({ phone, email, text }: AdvertisingData): void {
  if (!contentEl) return;

  contentEl.innerHTML = "";

  if (text) {
    const textMarkup = `<p>${text}</p>`;
    contentEl.insertAdjacentHTML("beforeend", textMarkup);
  }

  if (phone) {
    const phoneLinkMarkup = `<p>☎️: <a href="tel:${phone}">${phone}</a></p>`;
    contentEl.insertAdjacentHTML("beforeend", phoneLinkMarkup);
  }

  if (email) {
    const emailLinkMarkup = `<p>📧: <a href="mailto:${email}">${email}</a></p>`;
    contentEl.insertAdjacentHTML("beforeend", emailLinkMarkup);
  }
}

export function closeAdvertisingBlock(): void {
  if (advertisingEl) {
    advertisingEl.style.display = "none";
  }
}
