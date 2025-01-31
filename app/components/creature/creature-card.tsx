import { Box, Typography, Paper, Divider, Grid2 as Grid } from "@mui/material";
import { CreatureHeading } from "./creature-heading";
import type { Creature } from "~/types/creature";
import { CreatureStatistics } from "./creature-statistics";
import { CreatureTraits } from "./creature-traits";
import { CreatureActions } from "./creature-actions";
import { CreatureLegendaryActions } from "./creature-legendary-actions";

export const CreatureCard = ({ creature }: { creature: Creature }) => {
  console.log(`🚨 [creature-card.tsx] creature: `, creature);

  return (
    <Box component="main" display="flex" gap={2} p={2} flexDirection="column">
      <Paper
        component="section"
        sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <CreatureHeading {...creature} />
        <Divider />
        {/* STATS - Attributes, Skills, Immunities, Vulnerabilities, Languages, Experience, HP, AC, Type, Species */}
        <CreatureStatistics {...creature} />
        <Divider />

        <Grid
          container
          gridTemplateColumns="1fr 1fr 1fr"
          gridAutoFlow="column dense"
          spacing={2}
        >
          {/* ACTIONS - Regular Actions */}
          <Grid>
            <CreatureActions {...creature} />
          </Grid>

          {/* Traits - Passive Bonuses / Abilities  */}
          <Grid>
            <CreatureTraits {...creature} />
          </Grid>

          {/* LEGENDARY ACTIONS - Legendary Actions */}
          <Grid>
            <CreatureLegendaryActions {...creature} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
