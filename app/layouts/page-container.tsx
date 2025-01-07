import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import {
  Container,
  ThemeProvider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { Outlet } from "react-router";

import { useTheme } from "~/hooks/useTheme";

export default function PageContainer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start">
            {/* <AutoAwesome /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Beholdr
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}
