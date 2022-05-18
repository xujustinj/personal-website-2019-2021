export const Hues = {
  red: 0,
  orange: 30,
  yellow: 60,
  green: 150,
  blue: 210,
  purple: 300,
};

const colourVariant = (saturation: number, value: number) => (hue?: number) => {
  const h: number = hue ?? 0;
  const s: number = hue === undefined ? 0 : saturation * 100;
  const v: number = value * 100;
  return `hsl(${h}, ${s}%, ${v}%)`;
};

export const vibrant = colourVariant(0.8, 0.5);
export const muted = colourVariant(0.4, 0.6);
export const medium = colourVariant(0.5, 0.5);

export const primary = medium(Hues.blue);
