import { Box, Typography, Divider, Grid2 as Grid, Link } from "@mui/material";
import type { Route } from "./+types/home";
import { Card } from "~/components/home/card";
/**
 * Metadata for page
 * @param param0
 * @returns Array of metadata objects
 */

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Beholdr" },
    { name: "description", content: "Dungeons and Dragons tooling" },
  ];
}

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: 4,
        gap: 2,
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h1">Beholdr</Typography>
        <Typography variant="h4" component="h2">
          A D&D Encounter Manager
        </Typography>
      </Box>
      <Divider />
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        sx={{ width: 1, minHeight: { xs: 750, sm: 500, md: 250 } }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card to="/creatures">Creatures</Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card to="/encounters">Encounters</Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card to="/spells">Spells</Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card to="/items">Items</Card>
        </Grid>
      </Grid>
    </Box>
  );
}
