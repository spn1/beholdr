import { Grid2 as Grid, Divider, Box, Typography } from "@mui/material";

import type { Creature } from "~/types/creature";
import { capitalize } from "~/utils/string-utils";
import { CreatureAttributes } from "./creature-attributes";
import { CreatureProficiencies } from "./creature-proficiencies";
import { CreatureCombatAttributes } from "./creature-combat-attributes";
import { CreatureStatList } from "./creature-stat-list";
import { CreatureStatKeyValueList } from "./creature-stat-key-value-list";

export const CreatureStatistics = (creature: Creature) => {
  const {
    senses,
    damageImmunities,
    damageResistances,
    size,
    type,
    alignment,
    languages,
  } = creature;
  return (
    <Grid container>
      <Grid size={6}>
        <Typography variant="subtitle1">
          {capitalize(size)} {capitalize(type)}, {capitalize(alignment)}
        </Typography>
        <CreatureProficiencies {...creature} />
        <CreatureStatList name="Damage Immunities" list={damageImmunities} />
        <CreatureStatList name="Damage Resistances" list={damageResistances} />
        <CreatureStatKeyValueList name="Senses" stats={senses} />
        <CreatureStatList name="Languages" list={[languages]} />
      </Grid>
      <Grid size={6}>
        <Box display="flex" flexDirection="column" gap={2}>
          <CreatureAttributes {...creature} />
          <Divider />
          <CreatureCombatAttributes {...creature} />
        </Box>
      </Grid>
    </Grid>
  );
};
