"use client";

import { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SingleImageCard from "./SingleImageCard";
import Loading from "./loading";
import { ImageProps } from "@/type/index";

type results = {
  results: ImageProps[];
};

const ImageGallery = ({ results }: results) => {
  return (
    <section className="w-full py-20 text-center" id="Gallery">
      <h2 className="mb-10 inline-block border-b-2 border-primary pb-5 text-5xl font-bold text-primary">
        Gallery
      </h2>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        <Suspense fallback={<Loading />}>
          {results.map((details) => (
            <AnimatePresence key={details?.id}>
              <motion.div
                variants={{
                  hidden: (index) => ({
                    opacity: 0,
                    x: 0,
                    y: 10 * index,
                    scale: 0.5,
                  }),
                  whileInView: (index) => ({
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: { delay: index * 0.2 },
                  }),
                }}
                initial="hidden"
                whileInView="whileInView"
                viewport={{ once: true }}
                custom={details?.id}
                className="flex"
              >
                <SingleImageCard details={details} />
              </motion.div>
            </AnimatePresence>
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default ImageGallery;
