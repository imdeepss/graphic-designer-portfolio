"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type Initial = {
  opacity: number;
  x: number;
  y: number;
  scale: number;
};
type Animate = {
  opacity: number;
  x: number;
  y: number;
  scale: number;
};
type Transition = {
  duration: number;
};

type Props = {
  children: ReactNode;
  initial: Initial;
  animate: Animate;
  transition: Transition;
};

const AnimationDiv = ({ children, initial, animate, transition }: Props) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationDiv;
