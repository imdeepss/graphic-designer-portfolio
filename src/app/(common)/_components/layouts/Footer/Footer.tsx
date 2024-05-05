import React from "react";
import Link from "next/link";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

const socialMedia = [
  { icon: <TwitterIcon />, url: "/" },
  { icon: <LinkedinIcon />, url: "/" },
  { icon: <InstagramIcon />, url: "/" },
];

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-1 py-5 text-base text-primary">
      <ul className="mb-2 flex items-center justify-center gap-5">
        {socialMedia.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.icon}</Link>
          </li>
        ))}
      </ul>
      <span className="text-center">Made with ❤ by Simran Vishwakarma</span>
      <p className="text-center">
        © Simran Vishwakarma 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
