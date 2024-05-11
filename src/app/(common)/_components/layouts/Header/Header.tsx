"use client";

import { BreadcrumbIcon, CloseIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const menuItems = [
  { label: "About", url: "About" },
  { label: "Contact", url: "Contact" },
  { label: "Gallery", url: "Gallery" },
];

const goToSection = (name: string) => {
  const chooseGiftElement = document.getElementById(name);
  if (chooseGiftElement) {
    chooseGiftElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

const Header = () => {
  const [collapseMenu, setCollapseMenu] = useState(false);

  const handleClick = () => {
    setCollapseMenu(!collapseMenu);
  };

  const handleMenuItemClick = useCallback((url: string) => {
    goToSection(url);
  }, []);

  return (
    <header className="py-5">
      <nav className="relative flex flex-wrap items-center justify-between gap-4 text-xl font-medium text-primary">
        <Link href="/">
          <Image
            src="/images/sim.png"
            width={120}
            height={120}
            alt="Simran Vishwakarma"
          />
        </Link>
        <button type="button" className="lg:hidden" onClick={handleClick}>
          {collapseMenu ? <CloseIcon /> : <BreadcrumbIcon />}
        </button>
        <ul
          className={`${
            collapseMenu ? "flex" : "hidden"
          } w-full flex-col gap-5 lg:flex lg:w-auto lg:flex-row lg:items-center`}
        >
          {menuItems.map((item, index) => (
            <button
              type="button"
              onClick={() => handleMenuItemClick(item.url)}
              key={index}
            >
              <li className="cursor-pointer">{item.label}</li>
            </button>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
