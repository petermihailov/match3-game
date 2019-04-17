export const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  return min + Math.random() * (max - min).toFixed(4);
};

export const randSign = (val) => (Math.random() > 0.5 ? 1 : -1) * val;

export const reanimate = (el, className) => {
  el.classList.remove(className);
  el.getBoundingClientRect();
  el.classList.add(className);
};
