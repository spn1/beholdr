import { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useLoaderData, useNavigation, useSubmit } from "react-router";
import type { Route } from "./+types/creatures";

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
export const clientLoader = async ({ request }: Route.LoaderArgs) => {
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
  const urlSearchParams = new URLSearchParams(navigation.location?.search);
  const searching = urlSearchParams.has("q");

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
      </Box>
      <Box component="section">
        <CreatureTable creatures={creatures} searching={searching} />
      </Box>
    </Box>
  );
};
