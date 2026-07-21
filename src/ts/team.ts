import { teamMembers } from "../data/team.data";
import buildMasterContainer from "./team-card";
import { TeamMember } from "../types/team.types";
import { ServiceName, SubServiceName } from "../types/services.types";

const teamModalTitle = "Vyberte si mistra:";

const teamGalleryEl =
  document.querySelector<HTMLUListElement>(".js-team-gallery");

export function renderTeamList(): void {
  if (teamGalleryEl) {
    teamGalleryEl.innerHTML = buildTeamList(teamMembers);
  }
}

export function renderFilteredTeamByService(serviseKey: keyof ServiceName) {
  const modalContentEl =
    document.querySelector<HTMLDivElement>(".js-modal-content");
  const modalTitleEl =
    document.querySelector<HTMLHeadingElement>(".modal__title");

  if (!modalContentEl || !modalTitleEl) {
    console.error("Modal content or title element not found.");
    return;
  }

  modalTitleEl.textContent = teamModalTitle;

  modalContentEl.innerHTML = filterByService(teamMembers, serviseKey);
}

export function renderFilteredTeamBySubservice<K extends keyof ServiceName>(
  subServiceName: SubServiceName[K],
) {
  const modalContentEl =
    document.querySelector<HTMLDivElement>(".js-modal-content");
  const modalTitleEl =
    document.querySelector<HTMLHeadingElement>(".modal__title");

  if (!modalContentEl || !modalTitleEl) {
    console.error("Modal content or title element not found.");
    return;
  }

  modalTitleEl.textContent = teamModalTitle;

  modalContentEl.innerHTML = filterBySubService(teamMembers, subServiceName);
}

function filterByService(
  teamMembers: TeamMember[],
  serviseKey: keyof ServiceName,
): string {
  const filteredTeam = teamMembers.filter((master) =>
    Object.keys(master.price_list.services).includes(serviseKey),
  );

  return buildTeamList(filteredTeam);
}

function filterBySubService<K extends keyof ServiceName>(
  teamMembers: TeamMember[],
  subServiceName: SubServiceName[K],
): string {
  const filteredTeam = teamMembers.filter((member) =>
    Object.values(member.price_list.services).some((service) =>
      service?.prices.some((price) => price.name === subServiceName),
    ),
  );

  return buildTeamList(filteredTeam);
}

function buildTeamList(teamMembers: TeamMember[]): string {
  const teamList = teamMembers
    .map((member) => {
      return `<li class="team__item">${buildMasterContainer(member)}</li>`;
    })
    .join("");

  return `<ul class="team__list">${teamList}</ul>`;
}
