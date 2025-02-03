export const capitalize = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const capitalizeAll = (text: string = ""): string =>
  text.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
