import Link from "next/link";

export const NavLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="transition-colors p-2 rounded-lg hover:bg-neutral-100"
    >
      {children}
    </Link>
  );
};
