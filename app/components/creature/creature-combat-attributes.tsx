import { Grid2 as Grid, Box, Typography } from "@mui/material";

import type { Creature } from "~/types/creature";
import {
  getHighestArmorClass,
  getAttributeModifier,
} from "~/utils/creature-utils";

export const CreatureCombatAttributes = ({
  armorClass,
  hitPoints,
  dexterity,
}: Creature) => {
  return (
    <Grid container spacing={2} width={1}>
      <Grid size={4} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1">AC</Typography>
        <Typography variant="h4">{getHighestArmorClass(armorClass)}</Typography>
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
