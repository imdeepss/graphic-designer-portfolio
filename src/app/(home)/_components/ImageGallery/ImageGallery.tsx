import { ImageProps } from "@/type/index";
import cloudinary from "cloudinary";
import { Suspense } from "react";

import SingleImageCard from "./SingleImageCard";
import Loading from "./loading";

const fetchImages = async () => {
  cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  try {
    const result = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(50)
      .execute();

    const results = result.resources;
    const mappedResults: ImageProps[] = results.map(
      (resource: any, index: number) => ({
        id: index,
        height: resource.height,
        width: resource.width,
        public_id: resource.public_id,
        format: resource.format,
        url: resource.url,
      }),
    );
    return mappedResults;
  } catch (error) {
    console.error("Error fetching results from Cloudinary:", error);
    throw error;
  }
};

const ImageGallery = async () => {
  const getResults = async () => {
    return await fetchImages();
  };

  const results: ImageProps[] = await getResults();

  return (
    <section className="w-full py-20 text-center" id="Gallery">
      <h2 className="mb-10 inline-block border-b-2 border-primary pb-5 text-5xl font-bold text-primary">
        Gallery
      </h2>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        <Suspense fallback={<Loading />}>
          {results.map((details) => (
            <SingleImageCard key={details.id} details={details} />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default ImageGallery;
