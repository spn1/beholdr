import { DND_API_URL } from "~/constants";
import type { Query } from "~/types/graphql";

export const fetchData = async (query: Query) => {
  const response = await fetch(DND_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  });

  const { status } = response;

  const { data } = await response.json();

  return { data, status };
};
