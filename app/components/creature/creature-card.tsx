import { Box, Typography, Paper, Divider } from "@mui/material";

type CreatureCardProps = {
  /** Fill out with specific creature types */
  [key: string]: any;
};

export const CreatureCard = ({ creature }: CreatureCardProps) => {
  const {
    name,
    alignment,
    challenge_rating: challengeRating,
    proficiency_bonus: proficiencyBonus,
    strength,
    dexterity,
    constitution,
    wisdom,
    intelligence,
    charisma,
    damage_immunities: damageImmunities,
    damage_vulnerabilities: damageVulnerabilities,
    hit_dice: hitDice,
    hit_points: hitPoints,
    languages,
    size,
    subtype,
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h2">{name}</Typography>
          <Typography variant="h3">CR: {challengeRating}</Typography>
        </Box>
        <Divider />
        {/* STATS - Attributes, Skills, Immunities, Vulnerabilities, Languages, Experience, HP, AC, Type, Species */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1">Strength</Typography>
            <Typography variant="h4">{strength}</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1">Dexterity</Typography>
            <Typography variant="h4">{dexterity}</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1">Constitution</Typography>
            <Typography variant="h4">{constitution}</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1">Wisdom</Typography>
            <Typography variant="h4">{wisdom}</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1">Intelligence</Typography>
            <Typography variant="h4">{intelligence}</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1">Charisma</Typography>
            <Typography variant="h4">{charisma}</Typography>
          </Box>
        </Box>
        {/* TRAITS - Passive Bonuses / Abilities */}

        {/* ACTIONS - Regular Actions */}

        {/* LEGENDARY ACTIONS - Legendary Actions */}
      </Paper>
    </Box>
  );
};
