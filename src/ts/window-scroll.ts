import toggleStickyClass from "./sticky-header";
import { switchNavLinkInScrolling } from "./current-navlink-switcher";

export function handleScroll(): void {
  toggleStickyClass();
  switchNavLinkInScrolling();
}
