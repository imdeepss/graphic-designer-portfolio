"use client";

import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { ImageProps } from "@/type/index";
import SingleImageCard from "./SingleImageCard";
import Loading from "./loading";

const fetchImages = async () => {
  try {
    const response = await axios.post("/api/fetch-cloudinary");
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

const ImageGallery = () => {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    const getResults = async () => {
      const result = await fetchImages();
      setImages(result);
    };

    getResults();
  }, []);

  return (
    <section className="w-full py-20">
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        <Suspense fallback={<Loading />}>
          {images.map((details) => (
            <SingleImageCard key={details.id} details={details} />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default ImageGallery;
