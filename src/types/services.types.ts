import { SERVICE_NAMES, SUB_SERVICE_NAMES } from "../data/services.data";

export type ServiceKey = keyof typeof SERVICE_NAMES;

export type ServiceName = typeof SERVICE_NAMES;

export type SubServiceName = {
  [K in ServiceKey]: (typeof SUB_SERVICE_NAMES)[K][number];
};

export type Price<K extends ServiceKey> = {
  name: SubServiceName[K];
  price: string;
};

export type ServiceItem<K extends ServiceKey> = {
  name: ServiceName[K];
  prices: Price<K>[];
};

export type Services = {
  [K in ServiceKey]: ServiceItem<K>;
};
