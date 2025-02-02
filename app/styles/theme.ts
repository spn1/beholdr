import { createTheme } from "@mui/material";
import type { Theme, ThemeOptions } from "@mui/material";

const commonTheme: ThemeOptions = {
  cssVariables: true,
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
            cursor: "pointer",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiTablePagination-toolbar": {
            height: 40,
            minHeight: 40,
          },
          "& .MuiDataGrid-footerContainer": {
            height: 40,
            minHeight: 40,
          },
          a: {
            color: "inherit",
            textDecoration: "inherit",
          },
        },
      },
    },
  },
};

export const darkTheme: Theme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#F5CB5C",
    },
    secondary: {
      main: "#EF8354",
    },
  },
});

export const lightTheme: Theme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#B91C1C",
    },
    secondary: {
      main: "#FDE047",
    },
    text: {
      primary: "#27272A",
      secondary: "#27272A",
      disabled: "#27272A",
    },
    background: {
      default: "#E7E5E4",
      paper: "#EEEEEE",
    },
  },
});
