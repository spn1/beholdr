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
      main: "#C84B31",
    },
    secondary: {
      main: "#ECDBBA",
    },
    background: {
      default: "#191919",
    },
  },
});

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#4A4947",
    },
    secondary: {
      main: "#B17457",
    },
    background: {
      default: "#FAF7F0",
    },
  },
});
