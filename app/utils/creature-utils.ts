import type { ArmorClass } from "~/types/creature";

const NATURAL_ARMOR_CLASS_TYPE = "natural";

export const getNaturalArmorClass = (armorClass: ArmorClass[]) =>
  armorClass.find(({ type }) => type === NATURAL_ARMOR_CLASS_TYPE);

export const getAttributeModifier = (attribute: number) => {
  return (attribute - 10) / 2;
};
