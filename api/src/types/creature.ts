import { CamelizeKeys } from "./utils";

export enum Size {
  TINY = "Tiny",
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
  HUGE = "Huge",
  GARGANTUAN = "Gargantuan",
}

export type ArmorClass = {
  type: string;
  value: number;
};

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

export type DifficultyCheck = {
  type: string; // TODO: Reduce from api index object
  value: number;
  success_type: DifficultyCheckSuccessType;
};

export type DifficultyCheckSuccessType = "none" | "half";

export type SpecialAbility = {
  name: string;
  desc: string;
  usage?: AbillityUsage;
};

export type AbillityUsage = {
  type: string;
  times: number;
  rest_types: string[];
};

/**
 * Actions
 */
export type Action = {
  name: string;
  desc: string;
  attackBonus: number;
  difficulty_check?: DifficultyCheck;
  damage: ActionDamage[];
  actions?: Action[]; // Actions that can be used in conjunction with this action (i.e. multiattacks)
};

export type LegendaryAction = {
  name: string;
  desc: string;
  attack_bonus?: number;
  difficulty_check?: DifficultyCheck;
  damage?: ActionDamage[];
};

export type ActionDamage = {
  damageType: string; // TODO: reduce from DataType
  damageDice: string;
};

// export type DamageType = {
//   index: string;
//   name: string;
//   url: string;
// };

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
export type Creature = CamelizeKeys<Omit<ApiCreature, "index">>;

/**
 * ApiCreature is the full representation of a creature from the API.
 */
export type ApiCreature = {
  index: string;
  name: string; //  Modelled ✅
  size: Size; //  Modelled ✅
  type: string; //  Modelled ✅
  alignment: string; //  Modelled ✅
  armor_class: ArmorClass[];
  hit_points: number; //  Modelled ✅
  hit_dice: string; //  Modelled ✅
  hit_points_roll: string;
  speed: Speed;
  strength: number; //  Modelled ✅
  dexterity: number; //  Modelled ✅
  constitution: number; //  Modelled ✅
  intelligence: number; //  Modelled ✅
  wisdom: number; //  Modelled ✅
  charisma: number; //  Modelled ✅
  proficiencies: Proficiency[];
  damage_vulnerabilities: string[];
  damage_resistances: string[];
  damage_immunities: string[];
  condition_immunities: string[];
  senses: Sense;
  languages: string; //  Modelled ✅
  challenge_rating: number; //  Modelled ✅
  proficiency_bonus: number; //  Modelled ✅
  xp: number; //  Modelled ✅ as experience
  special_abilities: SpecialAbility[];
  actions: Action[];
  image: string;
  url: string; //  Modelled ✅
  legendary_actions: LegendaryAction[];
};
