import { Box, Typography } from "@mui/material";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/creature";

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

  const response = await fetch(
    `https://www.dnd5eapi.co/api/monsters/${creature}`
  );

  if (!response.ok) {
    throw new Response("Error", { status: 404 });
  }

  const data = await response.json();

  if (!data.index) {
    throw new Response("Not Found", { status: 404 });
  }

  return { data };
}

export default function Creatures() {
  const { data } = useLoaderData();

  return (
    <Box component="main">
      <Typography variant="h2">{data.name}</Typography>
    </Box>
  );
}
