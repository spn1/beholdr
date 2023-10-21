import "../styles/globals.css";

import { NavBar } from "@/components/NavBar/NavBar";

export const metadata = {
  title: "Beholdr",
  description: "DnD SRD viewer",
};

export default ({ children }) => {
  return (
    <html lang="en" className="dark">
      <body className="font-sans h-screen">
        <NavBar />
        {children}
      </body>
    </html>
  );
};
