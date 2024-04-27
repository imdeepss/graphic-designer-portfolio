import Image from "next/image";
import { ImageProps } from "@/type/index";

type Props = {
  images: ImageProps[];
};
const ImageGallery = ({ images }: Props) => {
  console.log(images);
  // const columns = 4;
  // const columnData = Array.from({ length: columns }, (_, i) =>
  //   images.slice(
  //     i * Math.ceil(images.length / columns),
  //     (i + 1) * Math.ceil(images.length / columns),
  //   ),
  // );

  return (
    <section className="w-full py-10">
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {images.map(({ id, public_id, format, blurDataUrl }) => (
          <div
            key={id}
            className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
          >
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/c_scale,w_720/${public_id}.${format}`}
              alt={String(blurDataUrl)}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
