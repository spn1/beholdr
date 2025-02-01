import camelize from "camelize";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/creature";

import { getCreatureQuery } from "~/graphql/creature";
import { fetchData } from "~/services/dnd-5e-service";
import { CreatureCard } from "~/components/creature/creature-card";

/**
 * Loads the specified creature in the url param
 * @param loaderFunctionArgs
 * @returns Data from api response
 */
export async function clientLoader({ params }: Route.LoaderArgs) {
  const { creature } = params;

  if (!creature || creature.length === 0) {
    throw new Response("Not Found", { status: 404 });
  }

  const query = getCreatureQuery({ index: creature });
  const {
    data: { monster },
    status,
  } = await fetchData(query);

  if (status !== 200) {
    throw new Response(" Error", { status });
  }

  return { creature: camelize(monster) };
}

/**
 * Root page of /creatures/:index
 * Fetches the data and passes it to display component
 */
export default ({ matches }) => {
  const { creature } = useLoaderData();

  console.log(`🚨 [creature.tsx] matches: `, matches);

  return <CreatureCard creature={creature} />;
};
