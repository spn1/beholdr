import {
  Container,
  ThemeProvider,
  AppBar,
  Toolbar,
  Switch,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link, Outlet } from "react-router";

import { useTheme } from "~/hooks/useTheme";

export default function PageContainer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <Link to="/">Beholdr</Link>
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
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}
