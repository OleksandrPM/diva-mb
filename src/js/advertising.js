import advertising from "../data/advertising.json";

const advertisingEl = document.querySelector(".advertising");
const contentEl = advertisingEl.querySelector(".advertising__content");

setTimeout(renderAdvertising, 3000);

function renderAdvertising() {
  try {
    if (advertising.text) {
      buildAdvertisingMarkup(advertising);
      advertisingEl.style.display = "block";
    }
  } catch (error) {
    console.log(`Can not load advertising info. ${error.message}`);
  }
}

function buildAdvertisingMarkup(advObject) {
  const { phone, email, text } = advObject;

  const textMarkup = `<p>${text}</p>`;
  const phoneLinkMarkup = `<p>☎️: <a href="tel:${phone}">${phone}</a></p>`;
  const emailLinkMarkup = `<p>📧: <a href="mailto:${email}">${email}</a></p>`;

  contentEl.innerHTML = "";

  contentEl.insertAdjacentHTML("beforeend", textMarkup);

  if (phone) {
    contentEl.insertAdjacentHTML("beforeend", phoneLinkMarkup);
  }

  if (email) {
    contentEl.insertAdjacentHTML("beforeend", emailLinkMarkup);
  }
}

export function closeAdvertisingBlock() {
  advertisingEl.style.display = "none";
}
