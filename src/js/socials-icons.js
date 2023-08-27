import icons from '../images/icons.svg';

const iconsSubPaths = {
  fb: '#icon-facebook',
  instagram: '#icon-square-instagram',
  tiktok: '#icon-tiktok',
};

export function buildSocialsList(socials) {
  const networkList = Object.keys(socials);
  const filteredNetworkList = networkList.filter(name => socials[name]);

  if (filteredNetworkList.length !== 0) {
    const items = filteredNetworkList
      .map(network => {
        return `<li><a href="${
          socials[network]
        }" target="_blank" rel="noopener noreferrer" class="socials__link" title="social">${buildIcon(
          getIconLink(network)
        )}</a></li>`;
      })
      .join('');

    const socialsMarkup = `<ul class='socials master-card__socials'>${items}</ul>`;

    return socialsMarkup;
  } else {
    return '';
  }
}

function getIconLink(network) {
  switch (network) {
    case 'fb':
      return `${icons}${iconsSubPaths.fb}`;
    case 'instagram':
      return `${icons}${iconsSubPaths.instagram}`;
    case 'tiktok':
      return `${icons}${iconsSubPaths.tiktok}`;
  }
}

function buildIcon(path) {
  return `<svg class="socials__icon" viewBox="0 0 32 32" width="32" height="32" ><use href="${path}"></use></svg>`;
}
