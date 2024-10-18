import { KeystoneContext } from "@keystone-6/core/types";

import { TypeInfo } from ".keystone/types";
import { FullCreature, CreatureIndex, Creature } from "../types/creature";

const API_URL = "https://www.dnd5eapi.co/api";

/**
 * Select only data from creature that is used in the database
 * @param creatures An array of creatures from the API
 * @returns An array of creatures containing only data needed for the database
 */
const selectCreatureData = (creatures: FullCreature[]): Creature[] => {
  return creatures.map((creature: FullCreature) => ({
    name: creature.name,
    challengeRating: creature.challenge_rating,
    experience: creature.xp,
  }));
};

/**
 * Fetches creature data from the DnD API using the specified path.
 * @param path The path to get information from
 * @returns Array of creatures
 */
const fetchCreatureDataFromApi = async (
  path: string
): Promise<FullCreature[]> => {
  const data = await fetch(`${API_URL}${path}`);
  const { results } = await data.json();

  const indexes = results.map(
    ({ index }: Pick<FullCreature, "index">) => index
  );
  const creatures = await Promise.all(
    indexes.map(async (index) => {
      const data = await fetch(`${API_URL}/monsters/${index}`);
      return await data.json();
    })
  );

  return creatures;
};

export const insertSeedDataFromApi = async (
  context: KeystoneContext<TypeInfo>
) => {
  const creatures = await fetchCreatureDataFromApi("/monsters/?name=bear");
  const reducedCreatures = selectCreatureData(creatures);

  // await Promise.all(
  //   reducedCreatures.map(async (creature: Creature) => {
  //     await context.query.Creature.createOne({ data: creature });
  //   })
  // );

  console.log(`🚨 [seed-data.ts] creatures: `, creatures);

  console.log("🌱 Seeded Database! 🌱");
};
