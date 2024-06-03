export enum CreatureSize {
  TINY = "Tiny",
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large",
  HUGE = "Huge",
  GARGANTUAN = "Gargantuan"
}

export type CreatureArmourClass = {
  type: string;
  value: number;
}

export type CreatureSpeed = {
  [type: string]: number;
}

export type CreatureProficiency = {
  value: number;
  proficiencies: Proficiency[];
}

export type Proficiency = {
  index: string;
  name: string;
  url: string;
}

export type CreatureSpecialAbility = {
  name: string;
  desc: string;
}

export type CreatureAction = {
  name: string;
  desc: string;
  attackBonus: number;
  damage: CreatureActionDamage[];
}

export type CreatureActionDamage = {
  damageType: DamageType;
  damageDice: string;
}

export type DamageType = {
  index: string;
  name: string;
  url: string;
}