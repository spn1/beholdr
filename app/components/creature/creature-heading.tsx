import { Box, Typography } from "@mui/material";
import type { Creature } from "~/types/creature";

export const CreatureHeading = ({
  name,
  challengeRating,
  proficiencyBonus,
}: Creature) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h2">{name}</Typography>
      <Box display="flex" flexDirection="row" gap={4}>
        <Typography variant="h3">PB: +{proficiencyBonus}</Typography>
        <Typography variant="h3">CR: {challengeRating}</Typography>
      </Box>
    </Box>
  );
};
