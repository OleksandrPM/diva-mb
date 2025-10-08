const trach = {
  def: new URL("./default/trach.jpg", import.meta.url),
  x1: new URL("./x1/trach_x1.webp", import.meta.url),
  x2: new URL("./x2/trach_x2.webp", import.meta.url),
};

const bondar = {
  def: new URL("./default/bondar.jpg", import.meta.url),
  x1: new URL("./x1/bondar_x1.webp", import.meta.url),
  x2: new URL("./x2/bondar_x2.webp", import.meta.url),
};

const hontar = {
  def: new URL("./default/hontar.jpg", import.meta.url),
  x1: new URL("./x1/hontar_x1.webp", import.meta.url),
  x2: new URL("./x2/hontar_x2.webp", import.meta.url),
};

const janeckova = {
  def: new URL("./default/janeckova.jpg", import.meta.url),
  x1: new URL("./x1/janeckova_x1.webp", import.meta.url),
  x2: new URL("./x2/janeckova_x2.webp", import.meta.url),
};

const khotynenko = {
  def: new URL("./default/khotynenko.jpg", import.meta.url),
  x1: new URL("./x1/khotynenko_x1.webp", import.meta.url),
  x2: new URL("./x2/khotynenko_x2.webp", import.meta.url),
};

const pecinova = {
  def: new URL("./default/pecinova.jpg", import.meta.url),
  x1: new URL("./x1/pecinova_x1.webp", import.meta.url),
  x2: new URL("./x2/pecinova_x2.webp", import.meta.url),
};

const volfova = {
  def: new URL("./default/volfova.jpg", import.meta.url),
  x1: new URL("./x1/volfova_x1.webp", import.meta.url),
  x2: new URL("./x2/volfova_x2.webp", import.meta.url),
};

const bocan = {
  def: new URL("./default/bocan.jpg", import.meta.url),
  x1: new URL("./x1/bocan_x1.webp", import.meta.url),
  x2: new URL("./x2/bocan_x2.webp", import.meta.url),
};

const avatar = new URL("./girl-profile.png", import.meta.url);

const teamPhotos = {
  trach,
  bondar,
  hontar,
  janeckova,
  khotynenko,
  pecinova,
  volfova,
  bocan,
};

export { teamPhotos, avatar };
