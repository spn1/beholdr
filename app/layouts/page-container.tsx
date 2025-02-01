import { Container, ThemeProvider, CssBaseline } from "@mui/material";
import { Outlet } from "react-router";

import { useTheme } from "~/hooks/useTheme";
import { NavBar } from "./nav-bar";
import { Breadcrumbs } from "./breadcrumbs";

export default () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Container maxWidth="lg">
        <Breadcrumbs />
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};
