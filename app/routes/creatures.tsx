import { useRef, useEffect, useMemo } from "react";
import { Box, Typography, TextField, LinearProgress } from "@mui/material";
import {
  Form,
  useLoaderData,
  useNavigation,
  useSubmit,
  Outlet,
} from "react-router";
import type { GridColDef } from "@mui/x-data-grid";
import type { Route } from "./+types/creatures";

import { DataTable } from "~/components/shared/data-table";
import { fetchData } from "~/services/dnd-api";
import { getCreaturesQuery } from "~/graphql/creatures";

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

export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const query = getCreaturesQuery({ name: q });

  const { data } = await fetchData(query);

  return { data, q };
};

export default () => {
  const {
    data: { monsters = [] },
    q,
  } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searching = navigation.location
    ? new URLSearchParams(navigation.location.search).has("q")
    : false;

  useEffect(() => {
    if (searchInputRef?.current) {
      searchInputRef.current.value = q || "";
    }
  }, []);

  const rows = useMemo(() => {
    return monsters.map(({ index, ...monster }) => ({
      id: index,
      index,
      ...monster,
    }));
  }, [monsters]);

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
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: 2,
        }}
      >
        <Box width={1 / 2}>
          <DataTable
            rows={rows}
            columns={CREATURE_COLUMNS}
            loading={searching}
          />
        </Box>
        <Box width={1 / 2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
