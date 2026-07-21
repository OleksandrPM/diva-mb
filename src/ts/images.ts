import { TeamMemberKey } from "../data/team.data";
import { TeamPhotoSet } from "../types/team.types";

export const icons = new URL("../assets/images/icons.svg", import.meta.url)
  .href;

export const teamAvatar = new URL(
  "../assets/images/team/avatar.png",
  import.meta.url,
);

export const teamPhotos: Record<TeamMemberKey, TeamPhotoSet> = {
  volfova: {
    def: new URL(
      "../assets/images/team/volfova.webp?width=350",
      import.meta.url,
    ),
    x1: new URL(
      "../assets/images/team/volfova.webp?width=350",
      import.meta.url,
    ),
    x2: new URL("../assets/images/team/volfova.webp", import.meta.url),
  },
  ahrenic: {
    def: new URL(
      "../assets/images/team/ahrenic.webp?width=350",
      import.meta.url,
    ),
    x1: new URL(
      "../assets/images/team/ahrenic.webp?width=350",
      import.meta.url,
    ),
    x2: new URL("../assets/images/team/ahrenic.webp", import.meta.url),
  },
  kropaleva: {
    def: new URL(
      "../assets/images/team/kropaleva.webp?width=350",
      import.meta.url,
    ),
    x1: new URL(
      "../assets/images/team/kropaleva.webp?width=350",
      import.meta.url,
    ),
    x2: new URL("../assets/images/team/kropaleva.webp", import.meta.url),
  },
  kaniak: {
    def: new URL(
      "../assets/images/team/kaniak.webp?width=350",
      import.meta.url,
    ),
    x1: new URL("../assets/images/team/kaniak.webp?width=350", import.meta.url),
    x2: new URL("../assets/images/team/kaniak.webp", import.meta.url),
  },
  orel: {
    def: new URL("../assets/images/team/orel.webp?width=350", import.meta.url),
    x1: new URL("../assets/images/team/orel.webp?width=350", import.meta.url),
    x2: new URL("../assets/images/team/orel.webp", import.meta.url),
  },
  trach: {
    def: new URL("../assets/images/team/trach.webp?width=350", import.meta.url),
    x1: new URL("../assets/images/team/trach.webp?width=350", import.meta.url),
    x2: new URL("../assets/images/team/trach.webp", import.meta.url),
  },
};
