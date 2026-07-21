import { TeamMember } from "../types/team.types";

export const TEAM_MEMBER_NAMES = {
  volfova: "Iryna Volfova",
  ahrenic: "Marina Ahrenič",
  kropaleva: "Valeriia Kropaleva",
  kaniak: "Štěpánka Kaniak",
  orel: "Yelyzaveta Orel",
  trach: "Tetiana Trach",
} as const;

const volfova: TeamMember = {
  id: "volfova",
  name: "Iryna Volfova",
  specialization: "Majitelka studia,<br/>kadeřník-stylista",
  contacts: { phone: "+420773939303" },
  socials: { instagram: "https://www.instagram.com/studiodivamb" },
  price_list: {
    services: {
      kadern_sluzby: {
        name: "Kadeřnické služby",
        prices: [
          { name: "Dámský střih (kompletní služba)", price: "850 - 1500" },
          { name: "Foukaná", price: "450 - 700" },
          { name: "Barva", price: "od 2000" },
          { name: "Melír", price: "1500 - 3000" },
          { name: "Balayage", price: "2500 - 5000" },
          { name: "Airtouch", price: "3000 - 6000" },
          { name: "Dekolorace (stahování barvy)", price: "od 2000" },
          { name: 'Ošetření "RESTRUCTURE"', price: "800 - 1500" },
          {
            name: "Smoothing system (nová metoda vyhlazení vlasů)",
            price: "2200 - 3000",
          },
          { name: "Natáčení vlasů", price: "od 500" },
          { name: "Společensky účes", price: "1500 - 2700" },
          { name: "Pánský střih", price: "400" },
          { name: "Dětský střih", price: "300" },
        ],
      },
    },
    add_info: "*Ceny jsou orientační, odvíjí se od spotřeby materiálu.",
  },
  photo: {
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
};

const ahrenic: TeamMember = {
  id: "ahrenic",
  name: "Marina Ahrenič",
  specialization: "Kadeřnice",
  contacts: { phone: "+420603729585" },
  socials: {
    fb: "https://www.facebook.com/profile.php?id=100005087111884",
    instagram: "https://www.instagram.com/marina_vlasy",
  },
  price_list: {
    services: {
      kadern_sluzby: {
        name: "Kadeřnické služby",
        prices: [
          { name: "Dámský střih (kompletní služba)", price: "700 - 1200" },
          { name: "Foukaná", price: "od 450" },
          { name: "Barva", price: "od 1400" },
          { name: "Melír", price: "1200 - 2500" },
          { name: "Balayage", price: "2500 - 4500" },
          { name: "Airtouch", price: "2500 - 4500" },
          { name: "Dekolorace (stahování barvy)", price: "1700 - 3900" },
          { name: 'Ošetření "RESTRUCTURE"', price: "800 - 1500" },
          {
            name: "Smoothing system (nová metoda vyhlazení vlasů)",
            price: "od 1900",
          },
          { name: "Natáčení vlasů", price: "od 500" },
          { name: "Společensky účes", price: "1500 - 2500" },
          { name: "Pánský střih", price: "400" },
          { name: "Dětský střih", price: "300" },
        ],
      },
    },
    add_info: "*Ceny jsou orientační, odvíjí se od spotřeby materiálu.",
  },
  photo: {
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
};

const kropaleva: TeamMember = {
  id: "kropaleva",
  name: "Valeriia Kropaleva",
  specialization: "Kadeřnice,<br/>specialistka na prodloužení vlasů",
  contacts: { phone: "+420776709176" },
  socials: {
    instagram: "https://www.instagram.com/valerie.hairexpert",
  },
  price_list: {
    services: {
      kadern_sluzby: {
        name: "Kadeřnické služby",
        prices: [
          { name: "Dámský střih (kompletní služba)", price: "850 - 1500" },
          { name: "Foukaná", price: "450 - 700" },
          { name: "Barva", price: "od 2000" },
          { name: "Melír", price: "1500 - 3000" },
          { name: "Balayage", price: "2500 - 5000" },
          { name: "Airtouch", price: "3000 - 6000" },
          { name: "Dekolorace (stahování barvy)", price: "od 2000" },
          { name: "Natáčení vlasů", price: "od 500" },
          { name: "Společensky účes", price: "1500 - 2700" },
          { name: "Prodlužování vlasů", price: "ceník na vyžádání" },
        ],
      },
    },
    add_info: "*Ceny jsou orientační, odvíjí se od spotřeby materiálu.",
  },
  photo: {
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
};

const orel: TeamMember = {
  id: "orel",
  name: "Yelyzaveta Orel",
  specialization: "Lash Artist",
  contacts: { phone: "+420737112269" },
  socials: {
    instagram: "https://www.instagram.com/yeliz_eyelashes",
  },
  price_list: {
    services: {
      rasove_sluzby: {
        name: "Řasy a obočí",
        prices: [
          { name: "Prodluzování 1D", price: "800" },
          { name: "Prodluzování 2D", price: "900" },
          { name: "Prodluzování 3D", price: "1000" },
          { name: "Prodluzování 4D", price: "1100" },
          { name: "Prodluzování 5D", price: "1200" },
          { name: "Odstranění práce jiného stylisty", price: "100" },
          { name: "Přechod / mokré řasy (wet effect)", price: "100" },
          { name: "Barvení obočí", price: "300" },
          { name: "Barvení obočí a korekce", price: "400" },
          { name: "Laminace obočí + barvení + korekce", price: "600" },
          {
            name: "Depilace voskem nad horním rtem / obočí (jedna zóna)",
            price: "200",
          },
        ],
      },
    },
    add_info: "*Ceny jsou orientační, odvíjí se od spotřeby materiálu.",
  },
  photo: {
    def: new URL("../assets/images/team/orel.webp?width=350", import.meta.url),
    x1: new URL("../assets/images/team/orel.webp?width=350", import.meta.url),
    x2: new URL("../assets/images/team/orel.webp", import.meta.url),
  },
};

const trach: TeamMember = {
  id: "trach",
  name: "Tetiana Trach",
  specialization:
    'Nezávislá kosmetická poradkyně,<br/>vizážistka společnosti "Mary Kay"',
  contacts: { phone: "+420774049282" },
  socials: {},
  price_list: {
    services: {
      kosm_konzultace: {
        name: "Kosmetické konzultace",
        prices: [{ name: "Kosmetická konzultace", price: "ceník na vyžádání" }],
      },
    },
  },
  photo: {
    def: new URL("../assets/images/team/trach.webp?width=350", import.meta.url),
    x1: new URL("../assets/images/team/trach.webp?width=350", import.meta.url),
    x2: new URL("../assets/images/team/trach.webp", import.meta.url),
  },
};

const kaniak: TeamMember = {
  id: "kaniak",
  name: "Štěpánka Kaniak",
  specialization: "Kadeřnice / Vizážistka / <br/>Kosmetická poradkyně",
  contacts: { phone: "+420793996799", email: "ucesaliceni@gmail.com" },
  socials: {
    fb: "https://www.facebook.com/profile.php?id=61590880675348",
    instagram: "https://www.instagram.com/violet_stepi/",
  },
  price_list: {
    services: {
      kadern_sluzby: {
        name: "Kadeřnické služby",
        prices: [
          { name: "Dámský střih (kompletní služba)", price: "800 - 1200" },
          { name: "Foukaná", price: "400 - 700" },
          { name: "Barva", price: "1600 - 2000" },
          { name: "Melír", price: "1850 - 3200" },
          { name: "Balayage", price: "2890 - 5000" },
          { name: "Airtouch", price: "3000 - 6000" },
          { name: "Dekolorace (stahování barvy)", price: "od 2000" },
          { name: 'Ošetření "RESTRUCTURE"', price: "800 - 1500" },
          {
            name: "Smoothing system (nová metoda vyhlazení vlasů)",
            price: "2200 - 3000",
          },
          { name: "Natáčení vlasů", price: "od 500" },
          { name: "Společensky účes", price: "1500 - 2700" },
          { name: "Pánský střih", price: "od 400" },
          { name: "Dětský střih", price: "od 300" },
        ],
      },
    },
    add_info: "*Ceny jsou orientační, odvíjí se od spotřeby materiálu.",
  },
  photo: {
    def: new URL(
      "../assets/images/team/kaniak.webp?width=350",
      import.meta.url,
    ),
    x1: new URL("../assets/images/team/kaniak.webp?width=350", import.meta.url),
    x2: new URL("../assets/images/team/kaniak.webp", import.meta.url),
  },
};

/* Team members array. The order of members in the array is important 
for the order of display on the website. */
export const teamMembers: TeamMember[] = [
  volfova,
  ahrenic,
  kropaleva,
  kaniak,
  orel,
  trach,
];
