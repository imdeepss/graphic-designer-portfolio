"use client";

import { ImageProps } from "@/type/index";
import axios from "axios";
import { useEffect, useState, Suspense } from "react";
import SingleImageCard from "./SingleImageCard";
import Loading from "./loading";

const ImageGallery = () => {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.post("/api/fetch-cloudinary");
        const results = response.data.resources;
        const mappedResults: ImageProps[] = results.map(
          (result: any, index: any) => ({
            id: index,
            height: result.height,
            width: result.width,
            public_id: result.public_id,
            format: result.format,
            url: result.url,
          }),
        );

        setImages(mappedResults);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
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
