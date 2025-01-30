import { Box, Typography } from "@mui/material";
import type { Creature } from "~/types/creature";
import { capitalize } from "~/utils/string-utils";
import { filterSavingThrows } from "~/utils/creature-utils";
import { CreatureStatKeyValueList } from "./creature-stat-key-value-list";

export const CreatureProficiencies = ({ proficiencies }: Creature) => {
  const stats = proficiencies.reduce(
    (acc, { proficiency: { name }, value }) => {
      acc[name] = value;
      return acc;
    },
    {} as Record<string, number>
  );

  return <CreatureStatKeyValueList name="Skills" stats={stats} />;
};
