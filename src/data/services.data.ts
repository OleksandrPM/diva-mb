import { Price, Services } from "../types/services.types";

// Price lists for each service
export const PriceListKadernSluzby: Price<"kadern_sluzby">[] = [
  {
    name: "Dámský střih (kompletní služba)",
    price: "700 - 1200 Kč",
  },
  {
    name: "Foukaná",
    price: "od 450 Kč",
  },
  {
    name: "Barva",
    price: "od 1400 Kč",
  },
  {
    name: "Melír",
    price: "1200 - 2500 Kč",
  },
  {
    name: "Balayage",
    price: "2500 - 4500 Kč",
  },
  {
    name: "Airtouch",
    price: "2500 - 4500 Kč",
  },
  {
    name: "Dekolorace (stahování barvy)",
    price: "1700 - 3900 Kč",
  },
  {
    name: 'Ošetření "RESTRUCTURE"',
    price: "800 - 1500 Kč",
  },
  {
    name: "Smoothing system (nová metoda vyhlazení vlasů)",
    price: "1900 Kč",
  },
  { name: "Natáčení vlasů", price: "od 500 Kč" },
  { name: "Společensky účes", price: "1500 - 2500 Kč" },
  {
    name: "Pánský střih",
    price: "400 Kč",
  },
  {
    name: "Dětský střih",
    price: "300 Kč",
  },
];

export const PriceListRasoveSluzby: Price<"rasove_sluzby">[] = [
  { name: "Prodluzování 1D", price: "700 Kč" },
  { name: "Prodluzování 2D", price: "800 Kč" },
  { name: "Prodluzování 3D", price: "900 Kč" },
  { name: "Prodluzování 4D", price: "1000 Kč" },
  { name: "Prodluzování 5D", price: "1100 Kč" },
  { name: "Odstranění práce jiného stylisty", price: "100 Kč" },
  { name: "Přechod / mokré řasy (wet effect)", price: "100 Kč" },
  { name: "Barvení obočí", price: "200 Kč" },
  { name: "Barvení obočí a korekce", price: "300 Kč" },
  { name: "Laminace obočí + barvení + korekce", price: "500 Kč" },
  {
    name: "Depilace voskem nad horním rtem / obočí (jedna zóna)",
    price: "100 Kč",
  },
];

export const PriceListKosmKonzultace: Price<"kosm_konzultace">[] = [
  {
    name: "Kosmetická konzultace",
    price: "ceník na vyžádání",
  },
];

/* The services object contains all the services with their names and price lists.
The order of services in the object determines the order in which they are displayed. */
export const services: Services = {
  kadern_sluzby: {
    name: "Kadeřnické služby",
    prices: PriceListKadernSluzby,
  },
  rasove_sluzby: {
    name: "Řasy a obočí",
    prices: PriceListRasoveSluzby,
  },
  kosm_konzultace: {
    name: "Kosmetické konzultace",
    prices: PriceListKosmKonzultace,
  },
};
