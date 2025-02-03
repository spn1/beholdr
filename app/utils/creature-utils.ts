import type { ArmorClass, CreatureProficiency } from "~/types/creature";

const NATURAL_ARMOR_CLASS_TYPE = "natural";

export const getNaturalArmorClass = (armorClass: ArmorClass[]) =>
  armorClass.find(({ type }) => type === NATURAL_ARMOR_CLASS_TYPE);

export const getHighestArmorClass = (armorClass: ArmorClass[]): number =>
  armorClass
    .map(({ value }) => value)
    .reduce((acc, value) => (value > acc ? value : acc), 0);

export const getAttributeModifier = (attribute: number) => {
  return (attribute - 10) / 2;
};

export const filterSavingThrows = (
  proficiencies: CreatureProficiency[]
): CreatureProficiency[] => {
  return proficiencies.filter(
    ({ proficiency: { name } }) => !name.includes("Saving Throw: ")
  );
};
