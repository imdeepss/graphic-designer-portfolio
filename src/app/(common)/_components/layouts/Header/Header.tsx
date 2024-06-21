"use client";

import { BreadcrumbIcon, CloseIcon, SimranLogo_V2 } from "@/components/icons";
import { AnimatePresence, motion } from "framer-motion";
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
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.4 },
            }}
            viewport={{ once: true }}
          >
            <Link href="/">
              {/* <SimranLogo /> */}
              <SimranLogo_V2 />
            </Link>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.4 },
            }}
            viewport={{ once: true }}
          >
            <button type="button" className="lg:hidden" onClick={handleClick}>
              {collapseMenu ? <CloseIcon /> : <BreadcrumbIcon />}
            </button>
          </motion.div>
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
                <li className="hover:text-green cursor-pointer transition duration-300 ease-in-out  hover:underline hover:underline-offset-1 ">
                  {item.label}
                </li>
              </button>
            ))}
          </ul>
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
