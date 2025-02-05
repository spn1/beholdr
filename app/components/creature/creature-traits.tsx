import { Typography, Box, Divider } from "@mui/material";

import type { Creature } from "~/types/creature";

export const CreatureTraits = ({ specialAbilities = [] }: Creature) => {
  if (!specialAbilities?.length) return null;

  return (
    <Box component="section">
      <Typography variant="h5" color="primary">
        Traits
      </Typography>
      {specialAbilities.map((ability, index) => (
        <Box key={index} display="flex" flexDirection="column">
          <Typography variant="h6">{ability.name}</Typography>
          <Typography variant="body1">{ability.desc}</Typography>
        </Box>
      ))}
    </Box>
  );
};
