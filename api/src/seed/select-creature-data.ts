import { ApiCreature, Creature } from "../types/creature";

/**
 * Select only data from creature that is used in the database
 * @param creatures An array of creatures from the API
 * @returns An array of creatures containing only data needed for the database
 */
export const selectCreatureData = (creatures: ApiCreature[]): Creature[] => {
  return creatures.map((creature: ApiCreature) => ({
    name: creature.name,
    challengeRating: creature.challenge_rating,
    experience: creature.xp,
    type: creature.type,
    alignment: creature.alignment,
    armorClass: creature.armor_class,
    hitPoints: creature.hit_points,
    hitDice: creature.hit_dice,
    hitPointsRoll: creature.hit_points_roll,
    strength: creature.strength,
    dexterity: creature.dexterity,
    constitution: creature.constitution,
    intelligence: creature.intelligence,
    wisdom: creature.wisdom,
    charisma: creature.charisma,
    damageVulnerabilities: creature.damage_vulnerabilities,
    damageResistances: creature.damage_resistances,
    damageImmunities: creature.damage_immunities,
    conditionImmunities: creature.condition_immunities,
    languages: creature.languages,
    proficiencyBonus: creature.proficiency_bonus,
    url: creature.url,
  }));
};
