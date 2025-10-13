import team from "../data/team.json";
import buildMasterContainer from "./team-card";
import { teamPhotos } from "../images";

const teamModalTitle = "Vyberte si mistra:";

const teamGalleryEl = document.querySelector(".js-team-gallery");
const modalContentEl = document.querySelector(".js-modal-content");
const modalTitleEl = document.querySelector(".modal__title");

teamGalleryEl.innerHTML = buildTeamList(team);

export function renderFilteredTeamList(service) {
  modalTitleEl.textContent = teamModalTitle;

  modalContentEl.innerHTML = buildFilteredTeamList(service);
}

function buildFilteredTeamList(servise) {
  const filteredTeam = team.filter((master) =>
    Object.keys(master.price_list).includes(servise)
  );

  return buildTeamList(filteredTeam);
}

function buildTeamList(team) {
  const teamList = team
    .map((member) => {
      const photo = teamPhotos[member.photoIndex]
        ? teamPhotos[member.photoIndex]
        : { def: null, x1: null, x2: null };

      const master = {
        ...member,
        photo,
      };

      return `<li class="team__item">${buildMasterContainer(master)}</li>`;
    })
    .join("");

  return `<ul class="team__list">${teamList}</ul>`;
}
