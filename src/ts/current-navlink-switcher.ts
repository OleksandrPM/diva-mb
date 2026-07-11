const navLinksEls = document.querySelectorAll<HTMLAnchorElement>(".nav__link");
const sectionsEls = document.querySelectorAll<HTMLDivElement>("section");

const linkClassName = "nav__link";
const activeLinkClassName = "active";

export function switchNavLinkInScrolling() {
  let currentSectionId = "";

  const currentScrollY = window.scrollY;

  sectionsEls.forEach((section) => {
    if (currentScrollY >= section.offsetTop - 200) {
      currentSectionId = section.id;
    }
  });

  navLinksEls.forEach((link) => {
    link.classList.toggle(
      activeLinkClassName,
      link.dataset.nav === currentSectionId,
    );
  });
}

export function switchCurrentNavLink(event: Event) {
  const target = event.target as HTMLElement;

  if (!target.classList.contains(linkClassName)) {
    return;
  }

  const currentLink = target.dataset.nav;

  navLinksEls.forEach((el) => {
    el.classList.toggle(activeLinkClassName, el.dataset.nav === currentLink);
  });
}
