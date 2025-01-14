import { Box, Avatar, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useNavigate } from "react-router";
import type { GridRowsProp, GridColDef } from "@mui/x-data-grid";

type DataTableProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading: boolean;
};

type DataTableRowProps = {
  name: string;
  challenge_rating: number;
};

const DataTableRow = (props) => {
  const {
    row: { index, name, image },
    rowHeight,
  } = props;
  console.log("[data-table] props:", props);
  return (
    <Box
      sx={{
        height: rowHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 1,
      }}
    >
      <Link to={index}>
        {/* <Avatar alt={name} src={`https://www.dnd5eapi.co${image}`} /> */}
        <Typography>{name}</Typography>
      </Link>
    </Box>
  );
};

export const DataTable = ({ rows, columns, loading }: DataTableProps) => {
  const navigate = useNavigate();
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      slotProps={{
        loadingOverlay: {
          variant: "skeleton",
          noRowsVariant: "skeleton",
        },
      }}
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      onRowClick={({ row }) => navigate(row?.index)}
      // slots={{
      //   row: (row) => <DataTableRow {...row} />,
      // }}
      disableRowSelectionOnClick
    />
  );
};
