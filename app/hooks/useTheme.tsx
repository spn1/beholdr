import { useCallback, useState } from "react";

import { lightTheme, darkTheme } from "~/styles/theme";
import type { Theme } from "@mui/material";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = useCallback(() => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [theme]);

  return { theme, toggleTheme };
};
