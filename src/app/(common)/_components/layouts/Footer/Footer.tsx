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
    <footer className="flex w-full flex-col items-center justify-center gap-4 py-5 text-base text-primary">
      <ul className="flex items-center justify-center gap-5">
        {socialMedia.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>{item.icon}</Link>
          </li>
        ))}
      </ul>
      <p className="">Footer Text comes here</p>
      <span className="">Made with imdeepss❤</span>
    </footer>
  );
};

export default Footer;
