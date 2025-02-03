import { useMemo } from "react";
import { Box } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";

import { DataTable } from "../shared/data-table";
import type { Creature } from "~/types/creature";
import { getSearchParam } from "~/utils/navigation-utils";

const CREATURE_COLUMNS: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 2 },
  { field: "challenge_rating", headerName: "Challenge Rating", flex: 1 },
];

type CreatureTableProps = {
  creatures: Creature[];
  searching: boolean;
};

export const CreatureTable = ({ creatures, searching }: CreatureTableProps) => {
  const page = getSearchParam("p");
  const rows = useMemo(() => {
    return creatures.map(({ index, ...monster }) => ({
      id: index,
      index,
      ...monster,
    }));
  }, [creatures]);

  return (
    <Box component="section" width={1} pb={2}>
      <DataTable
        rows={rows}
        columns={CREATURE_COLUMNS}
        loading={searching}
        page={page}
      />
    </Box>
  );
};
