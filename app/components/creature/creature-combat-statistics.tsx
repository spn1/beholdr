import { Grid2 as Grid, Box, Typography } from "@mui/material";

import type { Creature } from "~/types/creature";
import {
  getNaturalArmorClass,
  getAttributeModifier,
} from "~/utils/creature-utils";

export const CreatureCombatStatistics = ({
  armorClass,
  hitPoints,
  dexterity,
}: Creature) => {
  return (
    <Grid container spacing={2} width={1}>
      <Grid size={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1">AC</Typography>
        <Typography variant="h4">
          {getNaturalArmorClass(armorClass)?.value}
        </Typography>
      </Grid>
      <Grid size={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1">HP</Typography>
        <Typography variant="h4">{hitPoints}</Typography>
      </Grid>
      <Grid size={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1">Initiative</Typography>
        <Typography variant="h4">{getAttributeModifier(dexterity)}</Typography>
      </Grid>
    </Grid>
  );
};
