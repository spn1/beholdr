import { Container } from "@mui/material";
import { Outlet } from "react-router";

export default function PageContainer() {
  return (
    <Container maxWidth="lg">
      <Outlet />
    </Container>
  );
}
