/* It's important to name the corresponding variables 
based on the "photoIndex" value in "team.json" file. 
The images must be stored in strict folders 
and follow strict naming conventions.
 */

const trach = {
  def: new URL("./default/trach.jpg", import.meta.url),
  x1: new URL("./x1/trach_x1.webp", import.meta.url),
  x2: new URL("./x2/trach_x2.webp", import.meta.url),
};

const volfova = {
  def: new URL("./default/volfova.jpg", import.meta.url),
  x1: new URL("./x1/volfova_x1.webp", import.meta.url),
  x2: new URL("./x2/volfova_x2.webp", import.meta.url),
};

const ahrenic = {
  def: new URL("./default/ahrenic.jpg", import.meta.url),
  x1: new URL("./x1/ahrenic_x1.webp", import.meta.url),
  x2: new URL("./x2/ahrenic_x2.webp", import.meta.url),
};

const kropaleva = {
  def: new URL("./default/kropaleva.jpg", import.meta.url),
  x1: new URL("./x1/kropaleva_x1.webp", import.meta.url),
  x2: new URL("./x2/kropaleva_x2.webp", import.meta.url),
};

const orel = {
  def: new URL("./default/orel.jpg", import.meta.url),
  x1: new URL("./x1/orel_x1.webp", import.meta.url),
  x2: new URL("./x2/orel_x2.webp", import.meta.url),
};

const teamPhotos = {
  trach,
  volfova,
  ahrenic,
  kropaleva,
  orel,
};

const avatar = new URL("./girl-profile.png", import.meta.url);

export { teamPhotos, avatar };
