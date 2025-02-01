import { Link as RouterLink, useMatches } from "react-router";
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from "@mui/material";

import { capitalize } from "~/utils/string-utils";

type Breadcrumb = {
  to: string;
  name: string;
};

const getBreadcrumbsFromPath = (pathname: string): Breadcrumb[] => {
  const base = [{ to: "/", name: "Home" }];
  return pathname
    .split("/")
    .filter((crumb) => crumb)
    .reduce((acc, crumb, index) => {
      const previousCrumb = acc[index - 1];
      acc.push({
        to: [previousCrumb, crumb].filter((crumb) => crumb).join("/"),
        name: crumb,
      });

      return acc;
    }, base);
};

const Crumb = ({
  crumb,
  index,
  totalCrumbs,
}: {
  crumb: Breadcrumb;
  index: number;
  totalCrumbs: number;
}) =>
  index < totalCrumbs - 1 ? (
    <Link component={RouterLink} to={crumb?.to}>
      {capitalize(crumb?.name)}
    </Link>
  ) : (
    <Typography>{capitalize(crumb?.name)}</Typography>
  );

export const Breadcrumbs = () => {
  const matches = useMatches();
  const route = matches[2];

  if (!route) return;

  const breadcrumbs = getBreadcrumbsFromPath(route?.pathname);

  if (breadcrumbs.length <= 1) return;

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" sx={{ py: 2 }}>
      {breadcrumbs.map((crumb, index) => (
        <Crumb crumb={crumb} index={index} totalCrumbs={breadcrumbs.length} />
      ))}
    </MuiBreadcrumbs>
  );
};
