import Link from "next/link";
import { NavPageLinks } from "./NavPageLinks";
import { NavUserLinks } from "./NavUserLinks";

export const NavBar = () => {
  return (
    <header className="flex flex-row font-semibold justify-between p-6 bg-red-500 items-center">
      <div className="flex">
        <Link
          href="/"
          className="flex gap-4 px-4 md:border-r-4 md:border-black"
        >
          <img
            src="/images/bb-192x192.png"
            className="w-10 aspect-square rounded-full"
          />
          <h4 className="text-4xl font-bold hidden md:block">Beholdr</h4>
        </Link>
        <NavPageLinks />
      </div>
      <div>
        <NavUserLinks />
      </div>
    </header>
  );
};
