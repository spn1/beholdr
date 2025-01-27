import { Box, Typography } from "@mui/material";
import type { Creature } from "~/types/creature";

export const CreatureProficiencies = ({
  proficiencies,
  size,
  type,
  alignment,
}: Creature) => {
  return (
    <Box>
      <Typography variant="subtitle1">
        {size} {type}, {alignment}
      </Typography>
      <Typography variant="body1">
        Skills:&nbsp;
        {proficiencies
          .map(({ value, proficiency: { name } }) => `${name} +${value}`)
          .join(", ")}
      </Typography>
    </Box>
  );
};
