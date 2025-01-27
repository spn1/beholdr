import { Box, Typography, Paper, Divider, Grid2 as Grid } from "@mui/material";
import { CreatureAttributes } from "./creature-attributes";
import { CreatureProficiencies } from "./creature-proficiencies";
import { CreatureCombatStatistics } from "~/components/creature/creature-combat-statistics";
import { CreatureHeading } from "./creature-heading";
import type { Creature } from "~/types/creature";

export const CreatureCard = ({ creature }: { creature: Creature }) => {
  const {
    name,
    alignment,
    challengeRating,
    proficiencyBonus,
    strength,
    dexterity,
    constitution,
    wisdom,
    intelligence,
    charisma,
    damageImmunities,
    damageVulnerabilities,
    hitDice,
    hitPoints,
    languages,
    size,
    type,
    xp,
    image,
  } = creature;

  return (
    <Box component="main" display="flex" gap={2} p={2} flexDirection="column">
      <Paper
        component="section"
        sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <CreatureHeading {...creature} />
        <Divider />
        {/* STATS - Attributes, Skills, Immunities, Vulnerabilities, Languages, Experience, HP, AC, Type, Species */}
        <Grid container>
          <Grid size={6}>
            <CreatureProficiencies {...creature} />
          </Grid>
          <Grid size={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              <CreatureAttributes {...creature} />
              <Divider />
              <CreatureCombatStatistics {...creature} />
            </Box>
          </Grid>
        </Grid>

        {/* TRAITS - Passive Bonuses / Abilities */}

        {/* ACTIONS - Regular Actions */}

        {/* LEGENDARY ACTIONS - Legendary Actions */}
      </Paper>
    </Box>
  );
};
