import { Grid2 as Grid, Divider, Box, Typography } from "@mui/material";

import type { Creature, Sense } from "~/types/creature";
import { capitalize, capitalizeAll } from "~/utils/string-utils";
import { CreatureAttributes } from "./creature-attributes";
import { CreatureProficiencies } from "./creature-proficiencies";
import { CreatureCombatAttributes } from "./creature-combat-attributes";
import { CreatureStatList } from "./creature-stat-list";
import { CreatureStatKeyValueList } from "./creature-stat-key-value-list";

/**
 * Formats the senses object, to rename "passivePerception" to "Passive perception"
 * @param senses An object containing the senses of the creature
 * @returns An object containing the formatted senses
 */
const formatSenses = (senses: Record<string, string | number>) => {
  const formattedSenses = {};
  delete Object.assign(formattedSenses, senses, {
    ["Passive perception"]: senses["passivePerception"],
  })["passivePerception"];
  return formattedSenses;
};

export const CreatureStatistics = (creature: Creature) => {
  const {
    senses,
    damageVulnerabilities,
    damageImmunities,
    damageResistances,
    conditionImmunities,
    size,
    type,
    alignment,
    languages,
    speed,
  } = creature;
  return (
    <Grid container>
      <Grid size={{ md: 6, sm: 12 }} order={{ md: 1, sm: 2 }}>
        <Typography variant="subtitle1">
          {capitalizeAll(size)} {capitalizeAll(type)}, {capitalize(alignment)}
        </Typography>
        <CreatureProficiencies {...creature} />
        <CreatureStatList
          name="Damage Vulnerabilities"
          list={damageVulnerabilities}
        />
        <CreatureStatList name="Damage Resistances" list={damageResistances} />
        <CreatureStatList name="Damage Immunities" list={damageImmunities} />
        <CreatureStatList
          name="Condition Immunities"
          list={conditionImmunities.map(({ name }) => name)}
        />
        <CreatureStatKeyValueList name="Senses" stats={formatSenses(senses)} />
        <CreatureStatKeyValueList name="Speed" stats={speed} />
        <CreatureStatList name="Languages" list={[languages]} />
      </Grid>
      <Grid
        size={{ md: 6, sm: 12 }}
        order={{ md: 2, sm: 1 }}
        pb={{ md: 0, sm: 2 }}
      >
        <Box display="flex" flexDirection="column" gap={2}>
          <CreatureAttributes {...creature} />
          <Divider />
          <CreatureCombatAttributes {...creature} />
        </Box>
      </Grid>
    </Grid>
  );
};
