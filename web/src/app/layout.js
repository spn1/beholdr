import "../styles/globals.css";

import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "Beholdr",
  description: "DnD SRD viewer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans container">
        <NavBar>{children}</NavBar>
      </body>
    </html>
  );
}
