const navLinksEls = document.querySelectorAll('.nav__link');
const sectionsEls = document.querySelectorAll('section');

const linkClassName = 'nav__link';
const activeLinkClassName = 'active';

export function switchNavLinkInScrolling() {
  let currentSectionId = '';

  sectionsEls.forEach(el => {
    if (scrollY >= el.offsetTop - 200) {
      currentSectionId = el.getAttribute('id');
    }
  });

  navLinksEls.forEach(el => {
    if (
      !el.classList.value.includes('active') &&
      el.dataset.nav === currentSectionId
    ) {
      el.classList.add('active');
    }
    if (el.dataset.nav !== currentSectionId) {
      el.classList.remove('active');
    }
  });
}

export function switchCurrentNavLink(event) {
  const elClasses = event.target.classList.value;

  if (elClasses.includes(linkClassName)) {
    const currentLink = event.target.dataset.nav;
    navLinksEls.forEach(el => {
      if (
        el.dataset.nav === currentLink &&
        !el.classList.value.includes(activeLinkClassName)
      ) {
        el.classList.add(activeLinkClassName);
      }
      if (
        el.dataset.nav !== currentLink &&
        el.classList.value.includes(activeLinkClassName)
      ) {
        el.classList.remove(activeLinkClassName);
      }
    });
  }
}
