import type { Query, Variables } from "~/types/graphql";

export const getCreatureQuery = (variables: Variables): Query => ({
  query: `query Creature($index: String) {
    monster(index: $index) {
      index
      name
      alignment
      desc
      challenge_rating
      proficiency_bonus
      charisma
      constitution
      damage_immunities
      damage_resistances
      damage_vulnerabilities
      dexterity
      hit_dice
      hit_points
      hit_points_roll
      intelligence
      languages
      size
      strength
      subtype
      type
      wisdom
      xp
      image
    }
  }`,
  variables,
});
