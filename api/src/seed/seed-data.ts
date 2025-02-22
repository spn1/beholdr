import { KeystoneContext } from "@keystone-6/core/types";

import { TypeInfo } from ".keystone/types";
import { ApiCreature, Creature } from "../types/creature";

import { selectCreatureData } from "./select-creature-data";

const API_URL = "https://www.dnd5eapi.co/api";

/**
 * Fetches creature data from the DnD API using the specified path.
 * @param path The path to get information from
 * @returns Array of creatures
 */
const fetchCreatureDataFromApi = async (
  path: string
): Promise<ApiCreature[]> => {
  const data = await fetch(`${API_URL}${path}`);
  const { results } = await data.json();

  const indexes = results.map(({ index }: Pick<ApiCreature, "index">) => index);
  const creatures = await Promise.all(
    indexes.map(async (index) => {
      const data = await fetch(`${API_URL}/monsters/${index}`);
      return await data.json();
    })
  );

  return creatures;
};

/**
 * Fetches creature information from the DnD 5e API and inserts it into the database
 * @param context KeystoneContext
 */
export const insertSeedDataFromApi = async (
  context: KeystoneContext<TypeInfo>
) => {
  const creatures = await fetchCreatureDataFromApi("/monsters");
  const reducedCreatures = selectCreatureData(creatures);

  await Promise.all(
    reducedCreatures.map(async (creature: Creature) => {
      await context.query.Creature.createOne({ data: creature });
    })
  );

  console.log("🌱 Seeded Database! 🌱");
};
