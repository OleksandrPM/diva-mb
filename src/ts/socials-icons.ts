import { Socials } from "../types/socials.types";
import { icons } from "./images";

export const socialsIconId: { [K in keyof Socials]: string } = {
  fb: "#icon-facebook",
  instagram: "#icon-instagram",
  tiktok: "#icon-tiktok",
};

export function buildSocialsList(socials: Socials): string {
  const socialsKeys = Object.keys(socials) as (keyof Socials)[];

  if (socialsKeys.length !== 0) {
    const items = socialsKeys
      .map((key) => {
        return `<li><a href="${
          socials[key]
        }" target="_blank" rel="noopener noreferrer" class="socials__link" title="social">${buildIcon(
          getIconHref(key),
        )}</a></li>`;
      })
      .join("");

    const socialsMarkup = `<ul class='socials master-card__socials'>${items}</ul>`;

    return socialsMarkup;
  } else {
    return "";
  }
}

function getIconHref(networkKey: keyof Socials): string {
  return `${icons}${socialsIconId[networkKey]}`;
}

function buildIcon(path: string): string {
  return `<svg class="socials__icon" viewBox="0 0 32 32" width="32" height="32" ><use href="${path}"></use></svg>`;
}
