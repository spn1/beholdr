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
import { fetchData } from "~/services/dnd-5e-service";
import { getCreaturesQuery } from "~/graphql/creatures";
import { CreatureTable } from "~/components/creatures/creature-table";
import { SearchInput } from "~/components/shared/search-input";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beholdr | Creatures" },
    { name: "description", content: "Dungeons and Dragons Creatures" },
  ];
}

/**
 * Loads sample data for all the creatures from the API
 * @param param0 Loader arguments
 * @returns The data from the API call and the query
 */
export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const query = getCreaturesQuery({ name: q });

  const { data } = await fetchData(query);

  return { data, q };
};

export default () => {
  const {
    data: { monsters: creatures = [] },
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
        <SearchInput
          searchInputRef={searchInputRef}
          searching={searching}
          searchKey={"q"}
          submit={submit}
          defaultValue={q || ""}
        />
        {/* <Form
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
        </Form> */}
      </Box>
      <CreatureTable creatures={creatures} searching={searching} />
      {/* <Box component="section">
        <Box width={1}>
          <DataTable
            rows={rows}
            columns={CREATURE_COLUMNS}
            loading={searching}
          />
        </Box>
      </Box> */}
    </Box>
  );
};
