import type { Query, Variables } from "~/types/graphql";

export const getCreaturesQuery = (variables: Variables): Query => ({
  query: `query Creatures($name: String) {
    monsters(name: $name) {
      index
      name
      type
      size
      subtype
      alignment
      proficiency_bonus
      challenge_rating
    }
  }`,
  variables,
});
