import { DataGrid, GridRow } from "@mui/x-data-grid";
import { NavLink as RouterLink } from "react-router";
import { useNavigate } from "react-router";
import type { GridRowsProp, GridColDef } from "@mui/x-data-grid";

import { setSearchParam } from "~/utils/navigation-utils";

type DataTableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading: boolean;
  page: string | null;
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

export const DataTable = ({ rows, columns, loading, page }: DataTableProps) => {
  const navigate = useNavigate();
  const p = page ? parseInt(page, 10) : 0;

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
        pagination: { paginationModel: { pageSize: 20, page: p } },
      }}
      onRowClick={({ row }) => navigate(row?.index)}
      onPaginationModelChange={({ page }) => {
        setSearchParam("p", `${page}`);
      }}
      disableRowSelectionOnClick
    />
  );
};
