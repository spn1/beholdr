import type { Query, Variables } from "~/types/graphql";

export const getCreaturesQuery = (variables: Variables): Query => ({
  query: `query Creatures($name: String) {
    monsters(name: $name) {
      index
      name
      challenge_rating
      image
    }
  }`,
  variables,
});
