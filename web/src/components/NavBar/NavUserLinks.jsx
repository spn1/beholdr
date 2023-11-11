import { NavLink } from "./NavLink";

export const NavUserLinks = () => {
  return (
    <div className="flex gap-4">
      <NavLink href="/login">Log In</NavLink>
      <NavLink href="/sign-up">Sign Up</NavLink>
    </div>
  );
};
