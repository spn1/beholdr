import { useRef, useEffect } from "react";
import { Box, Typography, TextField, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Form,
  useLoaderData,
  useNavigation,
  useSubmit,
  Link as RouterLink,
} from "react-router";
import type { Route } from "./+types/creatures";

import { CREATURES_QUERY } from "~/graphql/creatures";
import type { GridColDef } from "@mui/x-data-grid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beholdr | Creatures" },
    { name: "description", content: "Dungeons and Dragons Creatures" },
  ];
}

const CREATURE_COLUMNS: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 2 },
  { field: "challenge_rating", headerName: "Challenge Rating", flex: 1 },
];

/**
 * Loads the list of all the creatures
 * @param loaderFunctionArgs
 * @returns Data from api response
 */
export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  const API_URL = `https://www.dnd5eapi.co/graphql`;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(CREATURES_QUERY({ name: q })),
  });

  const { data } = await response.json();

  return { data, q };
}

export default function Creatures() {
  const {
    data: { monsters = [] },
    q,
  } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    if (searchInputRef?.current) {
      searchInputRef.current.value = q || "";
    }
  }, []);

  return (
    <Box
      component="main"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h1">Creatures</Typography>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "stretch",
          alignItems: "center",
        }}
      >
        <Form
          id="search-form"
          role="search"
          className="w-full"
          onSubmit={(event) => submit(event.currentTarget)}
        >
          <TextField
            id="q"
            name="q"
            label="Search"
            type="search"
            variant="filled"
            disabled={searching}
            defaultValue={q || ""}
            ref={searchInputRef}
            fullWidth
          />
          <LinearProgress
            aria-hidden
            sx={{ display: searching ? "block" : "none" }}
            id="loading-bar"
          />
        </Form>
      </Box>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DataGrid
          rows={monsters.map(({ index, ...monster }) => ({
            id: index,
            index,
            ...monster,
          }))}
          columns={CREATURE_COLUMNS}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}
