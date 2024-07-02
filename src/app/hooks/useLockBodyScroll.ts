"use client";

import React, { useLayoutEffect } from "react";

const useLockBodyScroll = (locked: boolean): void => {
  useLayoutEffect(() => {
    if (locked) {
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [locked]); // Empty array ensures effect is only run on mount and unmount
};

export default useLockBodyScroll;
