import { throttle } from 'lodash';
import toggleStickyClass from './sticky-header';
import { switchNavLinkInScrolling } from './current-navlink-switcher';

window.addEventListener(
  'scroll',
  throttle(() => {
    toggleStickyClass();
    switchNavLinkInScrolling();
  }, 300)
);
