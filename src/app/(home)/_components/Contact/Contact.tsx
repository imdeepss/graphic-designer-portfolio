"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  return (
    <section
      className="flex min-h-screen w-full items-center justify-center text-center"
      id="Contact"
    >
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.7 },
          }}
          viewport={{ once: true }}
          className="w-full text-center lg:w-[700px]"
        >
          <h2 className="mb-8 inline-block border-b-2 border-primary pb-5 text-5xl font-bold text-primary">
            Get in touch
          </h2>
          <p className="mb-6 text-lg font-normal text-primary">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <div className="flex items-center justify-center">
            <a
              className="my-3 flex items-center justify-center rounded border border-primary px-6 py-3 text-primary hover:bg-primary hover:text-secondary hover:outline-none"
              href="mailto:simranvishwakarma015@gmail.com"
            >
              Say Hello
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Contact;
