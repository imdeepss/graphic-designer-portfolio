"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

const socialMedia = [
  { icon: <TwitterIcon />, url: "/" },
  { icon: <LinkedinIcon />, url: "/" },
  { icon: <InstagramIcon />, url: "/" },
];

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-1 py-5 text-base text-primary">
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9 },
          }}
          viewport={{ once: true }}
          className="w-full text-center lg:w-[700px]"
        >
          <ul className="mb-2 flex items-center justify-center gap-5">
            {socialMedia.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.icon}</Link>
              </li>
            ))}
          </ul>
          <span className="text-center">Design by ❤Simran Vishwakarma❤</span>
          <p className="text-center">
            © Simran Vishwakarma 2024. All rights reserved.
          </p>
        </motion.div>
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
