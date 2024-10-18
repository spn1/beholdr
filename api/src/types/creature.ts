import {
  CreatureSize,
  CreatureAction,
  CreatureArmourClass,
  CreatureProficiency,
  CreatureSpecialAbility,
  CreatureSpeed,
} from "./creature-properties";

import { User } from "../types/user";

export type Creature = {
  name: string;
  challengeRating: number;
  experience: number;
  createdBy?: User;
  createdAt?: Date;
};

export type FullCreature = {
  index: string;
  name: string;
  size: CreatureSize;
  type: string; // Turn into enum
  alignment: string; // Turn into enum
  armor_class: CreatureArmourClass[];
  hit_points: number;
  hit_dice: string;
  hit_points_roll: string;
  speed: CreatureSpeed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: CreatureProficiency[];
  damage_vulnerabilities: [];
  damage_resistances: [];
  damage_immunities: [];
  condition_immunities: [];
  senses: { [type: string]: number };
  languages: string;
  challenge_rating: number;
  proficiency_bonus: number;
  xp: number;
  special_abilities: CreatureSpecialAbility[];
  actions: CreatureAction[];
  image: string;
  url: string;
  legendary_actions: [];
};

export type CreatureIndex = {
  index: string;
  name: string;
  url: string;
};
