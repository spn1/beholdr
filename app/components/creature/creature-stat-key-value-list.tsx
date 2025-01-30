import { Typography } from "@mui/material";

import { capitalize } from "~/utils/string-utils";

type CreatureStatKeyValueListProps = {
  stats: Record<string, string>;
  name: string;
};

export const CreatureStatKeyValueList = ({
  stats,
  name,
}: CreatureStatKeyValueListProps) => {
  if (!Object.keys(stats).length) return null;

  return (
    <>
      <Typography variant="body1" color="primary">
        {name}:&nbsp;
      </Typography>
      <Typography variant="body2">
        {Object.entries(stats)
          .map(([key, value]) => value && `${capitalize(key)}: ${value}`)
          .filter((text: string) => text)
          .join(", ")}
      </Typography>
    </>
  );
};
