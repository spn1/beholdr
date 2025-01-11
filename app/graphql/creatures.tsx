import type { Variables } from "~/types/graphql";

export const CREATURES_QUERY = (variables: Variables) => ({
  query: `query Creatures($name: String) {
    monsters(name: $name) {
      index
      name
      challenge_rating
    }
  }`,
  variables,
});
