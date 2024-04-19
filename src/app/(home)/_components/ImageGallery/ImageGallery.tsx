"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const unsplashImageLinks: string[] = [
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/800x601",
  "https://source.unsplash.com/random/800x602",
  "https://source.unsplash.com/random/800x603",
  "https://source.unsplash.com/random/800x604",
  "https://source.unsplash.com/random/800x605",
  "https://source.unsplash.com/random/800x606",
  "https://source.unsplash.com/random/800x607",
  "https://source.unsplash.com/random/800x608",
  "https://source.unsplash.com/random/800x609",
  "https://source.unsplash.com/random/800x610",
  "https://source.unsplash.com/random/800x611",
  "https://source.unsplash.com/random/800x612",
  "https://source.unsplash.com/random/800x613",
  "https://source.unsplash.com/random/800x614",
];

const ImageGallery = () => {
  const [imageDetails, setImageDetails] = useState<string[]>([]); // Provide explicit type information

  useEffect(() => {
    setImageDetails(unsplashImageLinks);
  }, []);

  const columns = 4;
  const columnData = Array.from({ length: columns }, (_, i) =>
    imageDetails.slice(
      i * Math.ceil(imageDetails.length / columns),
      (i + 1) * Math.ceil(imageDetails.length / columns),
    ),
  );

  return (
    <section className="w-full py-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {columnData.map((column, columnIndex) => (
          <div className="flex flex-col gap-4" key={columnIndex}>
            {column.map((image, imageIndex) => (
              <div className="" key={imageIndex}>
                <Image
                  src={image}
                  alt={`Image ${columnIndex * columns + imageIndex + 1}`}
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
