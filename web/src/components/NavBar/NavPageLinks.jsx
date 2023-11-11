import { NavLink } from "./NavLink";

export const NavPageLinks = () => {
  return (
    <div className="flex gap-4 ml-4 items-center">
      <NavLink href="/creatures">Creatures</NavLink>
      <NavLink href="/spells">Spells</NavLink>
      <NavLink href="/items">Items</NavLink>
    </div>
  );
};
