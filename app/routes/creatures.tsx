import { useRef, useEffect } from "react";
import { Box, Typography, TextField, CircularProgress } from "@mui/material";
import {
  Form,
  useLoaderData,
  useNavigation,
  useSubmit,
  Link,
} from "react-router";
import type { Route } from "./+types/creatures";

/**
 * Loads the list of all the creatures
 * @param loaderFunctionArgs
 * @returns Data from api response
 */
export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const apiUrl = q
    ? `https://www.dnd5eapi.co/api/monsters/?name=${q}`
    : `https://www.dnd5eapi.co/api/monsters`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return { data, q };
}

export default function Creatures() {
  const {
    data: { count, results = [] },
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
    <Box component="main">
      <Typography variant="h1">Creatures</Typography>
      <Box
        component="section"
        sx={{ display: "flex", gap: 2, alignItems: "center" }}
      >
        <Form
          id="search-form"
          role="search"
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
          />
        </Form>
        <CircularProgress
          aria-hidden
          sx={{ display: searching ? "block" : "none" }}
          id="search-spinner"
        />
      </Box>
      <Box
        component="section"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography>Count: {count}</Typography>
        {results.map(({ index, name }: { name: string; index: string }) => (
          <Link to={`/creatures/${index}`} key={index}>
            {name}
          </Link>
        ))}
      </Box>
    </Box>
  );
}
