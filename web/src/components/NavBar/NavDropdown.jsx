// export const NavDropdown = ({ children }) => {
//   return (
//     <button
//       type="button"
//       className="hover:bg-neutral-100 rounded-lg border-slate-900 border-solid border-2 p-1"
//     >
//       {children}
//     </button>
//   );
// };

"use client";
import { Menu } from "@headlessui/react";
import { forwardRef } from "react";
import Link from "next/link";

import { Bars3Icon } from "@heroicons/react/24/solid";

const NavDropdownLink = forwardRef((props, ref) => {
  let { children, ...rest } = props;
  return <Link {...rest}>{children}</Link>;
});

export const NavDropdown = () => {
  return (
    <Menu>
      <Menu.Button>
        <Bars3Icon
          className="-mr-1 h-10 w-10 text-neutral-100"
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {/* {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )} */}
          <NavDropdownLink href="/creatures">Creatures</NavDropdownLink>
        </Menu.Item>
        <Menu.Item>
          {/* {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )} */}
          <NavDropdownLink href="/spells">Spells</NavDropdownLink>
        </Menu.Item>
        <Menu.Item>
          {/* {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )} */}
          <NavDropdownLink href="/items">Items</NavDropdownLink>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};
