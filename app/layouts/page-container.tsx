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
  SvgIcon,
} from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router";

import { useTheme } from "~/hooks/useTheme";
import { ThemeSwitch } from "~/components/layout/theme-switcher";
import { DiceIcon } from "~/components/shared/icons/dice";

export default function PageContainer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}> */}
          <Link
            color="background.default"
            component={RouterLink}
            underline="none"
            to="/"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <DiceIcon />
            <Typography variant="h6" component="span">
              Beholdr
            </Typography>
          </Link>
          {/* </Box> */}
          <Box>
            <ThemeSwitch
              onChange={toggleTheme}
              checked={theme.palette.mode === "dark"}
            />
            {/* <Button color="inherit">Login</Button> */}
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
