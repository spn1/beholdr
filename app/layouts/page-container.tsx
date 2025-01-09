import {
  Container,
  ThemeProvider,
  AppBar,
  Toolbar,
  Switch,
  Typography,
  Button,
  Box,
  CssBaseline,
  Link,
} from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router";

import { useTheme } from "~/hooks/useTheme";

export default function PageContainer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <Link component={RouterLink} to="/">
              Beholdr
            </Link>
          </Typography>
          <Box>
            <Switch
              onChange={toggleTheme}
              checked={theme.palette.mode === "dark"}
            />
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box>
          <Outlet />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
