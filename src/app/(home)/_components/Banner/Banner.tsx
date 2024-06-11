"use client";

import { AnimationDiv } from "@/components/layouts";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  return (
    <AnimatePresence>
      <section className="flex w-full items-center justify-center py-20 md:min-h-[calc(100svh_-_120px)] md:py-0">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="relative z-10 w-full text-primary lg:w-1/2">
            <AnimationDiv
              initial={{ opacity: 0, x: -500, y: 500, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <p className="relative mb-6 text-lg font-semibold">
                Hi, my name is
              </p>
            </AnimationDiv>
            <AnimationDiv
              initial={{ opacity: 0, x: -500, y: 500, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className=" mb-6 text-5xl font-bold md:text-7xl">
                Simran Vishwakarma,
              </h1>
            </AnimationDiv>
            <AnimationDiv
              initial={{ opacity: 0, x: -500, y: 500, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <h2 className="mb-6 text-5xl font-bold opacity-85 md:text-7xl">
                I build things for the web.
              </h2>
            </AnimationDiv>
            <AnimationDiv
              initial={{ opacity: 0, x: -500, y: 500, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 1.0 }}
            >
              <p className="text-lg">
                I design and code beautifully simple things, and I love what I
                do. I like to code things from scratch, and enjoy bringing ideas
                to life in the browser. I value simple content structure, clean
                design patterns, and thoughtful interactions.
              </p>
            </AnimationDiv>
          </div>
          <div className="relative w-full lg:w-1/2">
            <AnimationDiv
              initial={{ opacity: 0, x: 0, y: 500, scale: 0 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/images/sim.png"
                alt="Banner"
                width="10000"
                height="10000"
              />
            </AnimationDiv>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Banner;
