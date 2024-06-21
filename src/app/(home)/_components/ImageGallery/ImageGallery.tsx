"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SingleImageCard from "./SingleImageCard";
import Loading from "./loading";
import { ImageProps } from "@/type/index";
import { ImageModal } from "@/components/layouts";

type Results = {
  results: ImageProps[];
};

const ImageGallery = ({ results }: Results) => {
  const [open, setOpen] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState<string>("");

  const toggleModal = () => {
    setOpen(!open);
  };

  const handleImageClick = (url: string) => {
    setImageURL(url); // Set the imageURL state to the full URL of the clicked image
    setOpen(true); // Open the modal
  };

  return (
    <section className="w-full py-20 text-center" id="Gallery">
      <h2 className="mb-10 inline-block border-b-2 border-primary pb-5 text-5xl font-bold text-primary">
        Gallery
      </h2>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {results.map((details, index) => (
          <AnimatePresence key={index}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 * index, scale: 0.5 },
                whileInView: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: index * 0.2 },
                },
              }}
              initial="hidden"
              animate="whileInView"
              exit="hidden"
              className="flex"
            >
              <SingleImageCard
                details={details}
                onClick={() =>
                  handleImageClick(
                    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/c_scale,w_720/${details.public_id}.${details.format}`,
                  )
                }
              />
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      <ImageModal open={open} onClose={toggleModal} imageURL={imageURL} />
    </section>
  );
};

export default ImageGallery;
