import { TeamMemberName } from "../data/team.data";
import { Price, ServiceName } from "./services.types";
import { Socials } from "./socials.types";

export type Contacts = {
  phone?: string;
  email?: string;
};

export type MemberPrices = {
  services: Partial<{
    [K in keyof ServiceName]: {
      name: ServiceName[K];
      prices: Price<K>[];
    };
  }>;
  add_info?: string;
};

export type TeamMember = {
  [K in keyof TeamMemberName]: {
    id: K;
    name: TeamMemberName[K];
    specialization: string;
    contacts: Contacts;
    socials: Socials;
    price_list: MemberPrices;
  };
}[keyof TeamMemberName];

export type TeamPhotoSet = {
  def: URL | null;
  x1: URL | null;
  x2: URL | null;
};

export type TeamMemberWithPhoto = TeamMember & {
  photo_set: TeamPhotoSet;
};
