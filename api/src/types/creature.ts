import { CamelizeKeys } from "./utils";

export enum Size {
  TINY = "Tiny",
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
  HUGE = "Huge",
  GARGANTUAN = "Gargantuan",
}

export type Speed = {
  burrow?: string;
  climb?: string;
  fly?: string;
  hover?: string;
  swim?: string;
  walk?: string;
};

export type Proficiency = {
  index: string;
  name: string;
  url: string;
};

export type SpecialAbility = {
  name: string;
  desc: string;
};

export type LegendaryAction = {
  name: string;
  desc: string;
  attack_bonus?: number;
  damage?: ActionDamage[];
};

export type Action = {
  name: string;
  desc: string;
  attackBonus: number;
  damage: ActionDamage[];
};

export type ActionDamage = {
  damageType: DamageType;
  damageDice: string;
};

export type DamageType = {
  index: string;
  name: string;
  url: string;
};

export type Sense = {
  blindsight?: string;
  darkvision?: string;
  passive_perception: number;
  tremorsense?: string;
  truesight?: string;
};

/**
 * Creature is a subset of ApiCreature, which is the information that is actually added to the internal database.
 */
export type Creature = CamelizeKeys<
  Omit<
    ApiCreature,
    | "index"
    | "proficiencies"
    | "speed"
    | "special_abilities"
    | "actions"
    | "legendary_actions"
  >
>;

/**
 * ApiCreature is the full representation of a creature from the API.
 */
export type ApiCreature = {
  index: string;
  name: string;
  size: Size;
  type: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  hit_points_roll: string;
  speed: Speed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: Proficiency[];
  damage_vulnerabilities: string[];
  damage_resistances: string[];
  damage_immunities: string[];
  condition_immunities: string[];
  senses: Sense;
  languages: string;
  challenge_rating: number;
  proficiency_bonus: number;
  xp: number;
  special_abilities: SpecialAbility[];
  actions: Action[];
  image: string;
  url: string;
  legendary_actions: LegendaryAction[];
};
