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

const ahrenic = {
  def: new URL("./default/ahrenic.jpg", import.meta.url),
  x1: new URL("./x1/ahrenic_x1.webp", import.meta.url),
  x2: new URL("./x2/ahrenic_x2.webp", import.meta.url),
};

const dolynska = {
  def: new URL("./default/dolynska.jpg", import.meta.url),
  x1: new URL("./x1/dolynska_x1.webp", import.meta.url),
  x2: new URL("./x2/dolynska_x2.webp", import.meta.url),
};

const teamPhotos = {
  trach,
  pecinova,
  volfova,
  ahrenic,
  dolynska,
};

const avatar = new URL("./girl-profile.png", import.meta.url);

export { teamPhotos, avatar };
