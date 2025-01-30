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
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" flexDirection="row" alignItems="center" gap={4}>
        <Typography variant="h2">{name}</Typography>
        <Typography
          variant="h3"
          sx={{
            borderWidth: "2px",
            borderRadius: "50%",
            borderStyle: "solid",
            borderColor: "primary.main",
            aspectRatio: 1,
            p: 0.5,
          }}
        >
          +{proficiencyBonus}
        </Typography>
      </Box>
      <Typography variant="h3">CR: {challengeRating}</Typography>
    </Box>
  );
};
