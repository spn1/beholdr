import { DataGrid } from "@mui/x-data-grid";
import type { GridRowsProp, GridColDef } from "@mui/x-data-grid";

type TableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading: boolean;
};

export function Table({ rows, columns, loading }: TableProps) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      disableRowSelectionOnClick
    />
  );
}
