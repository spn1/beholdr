import { Box, Paper, Divider } from "@mui/material";
import { Masonry } from "@mui/lab";

import type { Creature } from "~/types/creature";
import { CreatureHeading } from "./creature-heading";
import { CreatureStatistics } from "./creature-statistics";
import { CreatureTraits } from "./creature-traits";
import { CreatureActions } from "./creature-actions";
import { CreatureLegendaryActions } from "./creature-legendary-actions";

export const CreatureCard = ({ creature }: { creature: Creature }) => {
  console.log(`🚨 [creature-card.tsx] creature: `, creature);
  return (
    <Box component="main" display="flex" gap={2} flexDirection="column">
      <Paper
        component="section"
        sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <CreatureHeading {...creature} />
        <Divider />
        <CreatureStatistics {...creature} />
        <Divider />

        <Masonry columns={{ md: 2, xs: 1 }} spacing={2}>
          <CreatureTraits {...creature} />
          <CreatureActions {...creature} />
          <CreatureLegendaryActions {...creature} />
        </Masonry>
      </Paper>
    </Box>
  );
};
