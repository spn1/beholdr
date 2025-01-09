import { createTheme } from "@mui/material";

const commonTheme = {
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
};

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#2ec4b6",
    },
    secondary: {
      main: "#ff9f1c",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
  },
  colorSchemes: {
    dark: true,
  },
});

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#578E7E",
    },
    secondary: {
      main: "#ff914c",
    },
    background: {
      default: "#FFFAEC",
      paper: "#F5ECD5",
    },
    text: {
      primary: "#3D3D3D",
    },
  },
});
