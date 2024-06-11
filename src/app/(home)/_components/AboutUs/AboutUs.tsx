"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <AnimatePresence>
      <section className="relative w-full md:h-screen" id="About">
        <div className="grid h-full grid-cols-1 content-center gap-5 md:grid-cols-2 ">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.9 },
            }}
            viewport={{ once: true }}
          >
            <div className="">
              <h1 className="mb-5 text-3xl font-extrabold text-primary md:text-6xl">
                About Us
              </h1>
              <p
                className="pb-4 text-lg font-medium
          text-primary"
              >
                Hello! I&apos;m Simran Vishwakarma, a passionate graphic
                designer with a love for all things creative. From a young age,
                I&apos;ve been fascinated by the power of visual storytelling
                and its ability to evoke emotions and inspire action. With
                proficiency in Adobe Illustrator, Photoshop, and Canva, I bring
                ideas to life through compelling designs that captivate and
                engage audiences.{" "}
              </p>
              <p
                className="pb-4 text-lg font-medium
          text-primary"
              >
                Whether it&apos;s crafting a brand identity, designing
                captivating social media graphics, or creating stunning
                illustrations, I thrive on turning visions into reality.
                I&apos;m constantly seeking new challenges and opportunities to
                grow as a designer, always pushing the boundaries of my
                creativity. Let&apos;s collaborate and bring your next project
                to life!
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.9 },
            }}
            viewport={{ once: true }}
          >
            <div className="">
              <Image
                src="/images/aboutus.jpg"
                alt="Simran"
                width={7000}
                height={7000}
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default AboutUs;
