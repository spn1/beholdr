import { Box, Typography } from "@mui/material";

import type { Creature } from "~/types/creature";

export const CreatureLegendaryActions = ({
  legendaryActions = [],
}: Creature) => {
  if (!legendaryActions?.length) return null;
  return (
    <Box component="section">
      <Typography variant="h5" color="primary">
        Legendary Actions
      </Typography>
      {legendaryActions.map((action, index) => (
        <Box key={index} display="flex" flexDirection="column">
          <Typography variant="h6">{action.name}</Typography>
          <Typography variant="body1">{action.desc}</Typography>
        </Box>
      ))}
    </Box>
  );
};
