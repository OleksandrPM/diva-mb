// For every service must be defined a pair key-name in ServiceName type.
export type ServiceName = {
  kadern_sluzby: "Kadeřnické služby";
  rasove_sluzby: "Řasy a obočí";
  kosm_konzultace: "Kosmetické konzultace";
};

export type SubServiceName = {
  [K in keyof ServiceName]: K extends "kadern_sluzby"
    ?
        | "Dámský střih (kompletní služba)"
        | "Foukaná"
        | "Barva"
        | "Melír"
        | "Balayage"
        | "Airtouch"
        | "Dekolorace (stahování barvy)"
        | 'Ošetření "RESTRUCTURE"'
        | "Smoothing system (nová metoda vyhlazení vlasů)"
        | "Natáčení vlasů"
        | "Společensky účes"
        | "Pánský střih"
        | "Dětský střih"
        | "Prodlužování vlasů"
    : K extends "rasove_sluzby"
      ?
          | "Prodluzování 1D"
          | "Prodluzování 2D"
          | "Prodluzování 3D"
          | "Prodluzování 4D"
          | "Prodluzování 5D"
          | "Odstranění práce jiného stylisty"
          | "Přechod / mokré řasy (wet effect)"
          | "Barvení obočí"
          | "Barvení obočí a korekce"
          | "Laminace obočí + barvení + korekce"
          | "Depilace voskem nad horním rtem / obočí (jedna zóna)"
      : K extends "kosm_konzultace"
        ? "Kosmetická konzultace"
        : never;
};

export type Price<K extends keyof ServiceName> = {
  name: SubServiceName[K];
  price: string;
};

// Service type defines services depending on the key.
export type Service = {
  [K in keyof ServiceName]: { name: ServiceName[K]; prices: Price<K>[] };
};

export type Services = { [K in keyof ServiceName]: Service[K] };
