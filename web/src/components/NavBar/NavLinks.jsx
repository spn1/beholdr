import { NavLink } from "./NavLink";
import { NavDropdown } from "./NavDropdown";

export const NavLinks = () => {
  return (
    <div className="flex flex-grow justify-between">
      <div className="md:flex gap-4 ml-4 items-center hidden">
        <NavLink href="/creatures">Creatures</NavLink>
        <NavLink href="/spells">Spells</NavLink>
        <NavLink href="/items">Items</NavLink>
      </div>
      <div>
        <div className="md:flex gap-4 hidden">
          <NavLink href="/login">Log In</NavLink>
          <NavLink href="/sign-up">Sign Up</NavLink>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <NavDropdown>test</NavDropdown>
      </div>
    </div>
  );
};
