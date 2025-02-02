import { DataGrid, GridRow } from "@mui/x-data-grid";
import { NavLink as RouterLink } from "react-router";
import { useNavigate } from "react-router";
import type { GridRowsProp, GridColDef } from "@mui/x-data-grid";

type DataTableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading: boolean;
};

const ReactRouterGridRow = (props) => {
  const {
    row: { id },
  } = props;
  return (
    <RouterLink to={id} viewTransition>
      <GridRow {...props} />
    </RouterLink>
  );
};

export const DataTable = ({ rows, columns, loading }: DataTableProps) => {
  const navigate = useNavigate();
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      slots={{
        row: ReactRouterGridRow,
      }}
      slotProps={{
        loadingOverlay: {
          variant: "skeleton",
          noRowsVariant: "skeleton",
        },
      }}
      columnHeaderHeight={40}
      rowHeight={35}
      sx={{
        boxShadow: 2,
        border: 2,
        borderColor: "primary.light",
      }}
      initialState={{
        pagination: { paginationModel: { pageSize: 20 } },
      }}
      onRowClick={({ row }) => navigate(row?.index)}
      disableRowSelectionOnClick
    />
  );
};
