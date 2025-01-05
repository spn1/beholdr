import React from "react";
import { Link } from "react-router";
import { Card as MuiCard } from "@mui/material";

export type CardProps = {
  to: string;
  children: React.ReactNode;
};

export function Card({ to, children }: CardProps) {
  return (
    <Link to={to} className="size-full">
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
