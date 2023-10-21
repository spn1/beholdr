import Link from "next/link";
import { NavLink } from "./NavLink";

export const NavBar = () => {
  return (
    <header className="flex flex-row font-semibold justify-between p-6 bg-red-500 items-center">
      <div className="flex">
        <Link href="/" className="flex gap-4 px-4 border-r-4 border-black">
          <img
            src="/images/bb-192x192.png"
            className="w-10 aspect-square rounded-full"
          />
          <h4 className="text-4xl font-bold">Beholdr</h4>
        </Link>
        <div className="flex gap-4 ml-4 items-center">
          <NavLink href="/creatures">Creatures</NavLink>
          <NavLink href="/spells">Spells</NavLink>
          <NavLink href="/items">Items</NavLink>
        </div>
      </div>
      <div>
        <div className="flex gap-4">
          <NavLink href="/login">Log In</NavLink>
          <NavLink href="/spells">Sign Up</NavLink>
        </div>
      </div>
    </header>
  );
};
