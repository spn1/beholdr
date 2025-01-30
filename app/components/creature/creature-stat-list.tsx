import { Typography } from "@mui/material";

import { capitalize } from "~/utils/string-utils";

type CreatureStatListProps = {
  name: string;
  list: string[];
};

export const CreatureStatList = ({
  name,
  list = [],
}: CreatureStatListProps) => {
  if (!list.length) return null;

  return (
    <>
      <Typography variant="body1" color="primary">
        {name}:&nbsp;
      </Typography>
      <Typography variant="body2">
        {list.map((item) => capitalize(item)).join(", ")}
      </Typography>
    </>
  );
};
