import { createTheme } from "@mui/material";

const commonTheme = {
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
};

export const darkTheme = createTheme({
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

export const lightTheme = createTheme({
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
