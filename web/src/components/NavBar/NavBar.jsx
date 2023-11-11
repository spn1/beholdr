import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { NavUserLinks } from "./NavUserLinks";

export const NavBar = () => {
  return (
    <header className="flex font-semibold p-6 bg-red-500 items-center">
      <div className="flex">
        <Link
          href="/"
          className="flex md:order-none gap-4 px-4 md:border-r-4 md:border-black"
        >
          <img
            src="/images/bb-192x192.png"
            className="w-10 aspect-square rounded-full"
          />
          <h4 className="text-4xl font-bold hidden md:block">Beholdr</h4>
        </Link>
      </div>
      <NavLinks />
    </header>
  );
};
