"use client";

import { BreadcrumbIcon, CloseIcon } from "@/components/icons";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "About", url: "/" },
  { label: "Contact", url: "/" },
  { label: "Gallery", url: "/" },
];

const Header = () => {
  const [collapseMenu, setCollapseMenu] = useState(false);

  function handleClick() {
    setCollapseMenu(!collapseMenu);
  }
  return (
    <header className="py-5">
      <nav className="relative flex flex-wrap items-center justify-between gap-4 text-xl font-medium text-primary">
        <Link href="/">
          <h2 className="text-2xl font-bold">LOGO</h2>
        </Link>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => handleClick()}
        >
          {collapseMenu ? <CloseIcon /> : <BreadcrumbIcon />}
        </button>
        <ul
          className={`${
            collapseMenu ? "flex" : "hidden"
          } w-full flex-col gap-5 lg:flex lg:w-auto lg:flex-row lg:items-center`}
        >
          {menuItems.map((item, index) => (
            <Link href={item.url} key={index}>
              <li className="cursor-pointer">{item.label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
