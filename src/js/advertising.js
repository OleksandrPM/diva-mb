import axios from 'axios';

const advertisingURL =
  'https://docs.google.com/document/d/1Mxgp9hdtbm3hNf3S9lun98fVyLD0qNINv8z1RWM0pdw/export?format=txt';

const advertisingEl = document.querySelector('.advertising');
const contentEl = advertisingEl.querySelector('.advertising__content');

setTimeout(renderAdvertising(), 5000);

function renderAdvertising() {
  axios(advertisingURL)
    .then(({ data }) => {
      if (data.text) {
        buildAdvertisingMarkup(data);
        advertisingEl.style.display = 'block';
      }
    })
    .catch(error => {
      console.log(`Can not load advertising info. ${error.message}`);
    });
}

function buildAdvertisingMarkup(advObject) {
  const { phone, email, text } = advObject;

  const textMarkup = `<p>${text}</p>`;
  const phoneLinkMarkup = `<p>Tel.: <a href="tel:${phone}">${phone}</a></p>`;
  const emailLinkMarkup = `<p>Email.: <a href="mailto:${email}">${email}</a></p>`;

  contentEl.innerHTML = '';

  contentEl.insertAdjacentHTML('beforeend', textMarkup);

  if (phone) {
    contentEl.insertAdjacentHTML('beforeend', phoneLinkMarkup);
  }

  if (email) {
    contentEl.insertAdjacentHTML('beforeend', emailLinkMarkup);
  }
}

export function closeAdvertisingBlock() {
  advertisingEl.style.display = 'none';
}
