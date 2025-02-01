import {
  AppBar,
  Toolbar,
  Link,
  Typography,
  Box,
  type Theme,
} from "@mui/material";
import { Link as RouterLink } from "react-router";

import { ThemeSwitch } from "~/components/layout/theme-switcher";
import { DiceIcon } from "~/components/shared/icons/dice";

type NavBarProps = {
  theme: Theme;
  toggleTheme: () => void;
};

export const NavBar = ({ theme, toggleTheme }: NavBarProps) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          color="inherit"
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
        <Box>
          <ThemeSwitch
            onChange={toggleTheme}
            checked={theme?.palette?.mode === "dark"}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
