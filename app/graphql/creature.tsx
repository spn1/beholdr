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
      special_abilities {
        name
        desc
        dc {
          success
          type {
            name
          }
          value
        }
        spellcasting {
          spells {
            spell {
              name
            }
          }
        }
        damage {
          damage_dice
          damage_type {
            name
          }
        }
      }
      speed {
        walk
        swim
        hover
        fly
        climb
        burrow
      }
      senses {
        blindsight
        darkvision
        passive_perception
        tremorsense
        truesight
      }
      reactions {
        name
        desc
        dc {
          value
          type {
            name
          }
          success
        }
      }
      armor_class {
        value
        desc
        type
      }
      actions {
        name
        desc
      }
      condition_immunities {
        name
        desc
      }
      legendary_actions {
        name
        desc
        damage {
          damage_type {
            name
          }
          damage_dice
        }
        dc {
          value
          type {
            name
          }
        }
      }
      proficiencies {
        value
        proficiency {
          name
        }
      }
    }
  }`,
  variables,
});
