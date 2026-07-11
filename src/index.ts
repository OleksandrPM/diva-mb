import { throttle } from "lodash";
import { renderTeamList } from "./ts/team";
import { renderAdvertising } from "./ts/advertising";
import { setFooterDate } from "./ts/footer";

// import styles
import "modern-normalize/modern-normalize.css";
import "./sass/index.scss";

// render team list in team section
renderTeamList();

// set footer`s years
setFooterDate();

// render advertising block
const advTimeout = 3000; // 3s
setTimeout(() => {
  renderAdvertising();
}, advTimeout);

// lazy loading of scroll handling
const scrollThrottleTime = 300;
(async () => {
  const { handleScroll } = await import("./ts/window-scroll");

  window.addEventListener("scroll", throttle(handleScroll, scrollThrottleTime));
})();

// lazy loading of click handling
(async () => {
  const { onDocumentClick } = await import("./ts/body-click");
  document.addEventListener("click", onDocumentClick);
})();
