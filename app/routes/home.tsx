import { Box, Typography, Divider, Grid2 as Grid } from "@mui/material";
import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beholdr" },
    { name: "description", content: "Dungeons and Dragons tooling" },
  ];
}

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingY: 4 }}>
      <Typography variant="h1">Beholdr</Typography>
      <Typography variant="h4" component="h2">
        A D&D Encounter Manager
      </Typography>
      <Divider />
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, sm: 6 }}
        >
          <Link to={"/creatures"}>Creatures</Link>
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, sm: 6 }}
        >
          Encounters
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, sm: 6 }}
        >
          Spells
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, sm: 6 }}
        >
          Loot
        </Grid>
      </Grid>
    </Box>
  );
}
