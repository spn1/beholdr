import React from "react";
import { Link as RouterLink } from "react-router";
import { Card as MuiCard, Link } from "@mui/material";

export type CardProps = {
  to: string;
  children: React.ReactNode;
};

export function Card({ to, children }: CardProps) {
  return (
    <Link component={RouterLink} to={to} className="size-full">
      <MuiCard
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 1,
          height: 1,
        }}
      >
        {children}
      </MuiCard>
    </Link>
  );
}
