import { Container, ThemeProvider, Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

import { useTheme } from "~/hooks/useTheme";
import { NavBar } from "./nav-bar";
import { Breadcrumbs } from "./breadcrumbs";

export default ({ matches }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Container maxWidth="lg">
        <Breadcrumbs matches={matches} />
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};
