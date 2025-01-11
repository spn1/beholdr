import type { Query, Variables } from "~/types/graphql";

export const CREATURE_QUERY = `query Creatures($name: String) {
    monsters(name: $name) {
      index
      name
      challenge_rating
    }
  }`;

export const getCreaturesQuery = (variables: Variables): Query => ({
  query: `query Creatures($name: String) {
    monsters(name: $name) {
      index
      name
      challenge_rating
    }
  }`,
  variables,
});
