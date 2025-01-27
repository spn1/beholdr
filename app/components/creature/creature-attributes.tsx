import { Box, Typography, Grid2 as Grid, Divider } from "@mui/material";
import type { Creature } from "~/types/creature";
import { CreatureCombatStatistics } from "./creature-combat-statistics";

export const CreatureAttributes = (creature: Creature) => {
  const { strength, dexterity, constitution, wisdom, intelligence, charisma } =
    creature;
  return (
    <Box display="flex" flexDirection={"column"} alignItems="center">
      <Grid container spacing={2} width={1}>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          size={4}
        >
          <Typography variant="body1">Strength</Typography>
          <Typography variant="h4">{strength}</Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          size={4}
        >
          <Typography variant="body1">Dexterity</Typography>
          <Typography variant="h4">{dexterity}</Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          size={4}
        >
          <Typography variant="body1">Constitution</Typography>
          <Typography variant="h4">{constitution}</Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          size={4}
        >
          <Typography variant="body1">Wisdom</Typography>
          <Typography variant="h4">{wisdom}</Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          size={4}
        >
          <Typography variant="body1">Intelligence</Typography>
          <Typography variant="h4">{intelligence}</Typography>
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          size={4}
        >
          <Typography variant="body1">Charisma</Typography>
          <Typography variant="h4">{charisma}</Typography>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};
