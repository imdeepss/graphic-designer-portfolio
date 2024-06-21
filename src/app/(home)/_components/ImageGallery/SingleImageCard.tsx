import React from "react";
import Image from "next/image";
import { ImageProps } from "@/type/index";

type Props = {
  details: ImageProps;
  onClick: () => void;
};

const SingleImageCard = ({ details, onClick }: Props) => {
  const { public_id, format, blurDataUrl } = details;
  const imageURL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/c_scale,w_720/${public_id}.${format}`;

  return (
    <div className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg">
      <Image
        src={imageURL}
        alt={String(blurDataUrl)}
        width={720}
        height={480}
        sizes="(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw"
        className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
        style={{ transform: "translate3d(0, 0, 0)" }}
        onClick={onClick}
      />
    </div>
  );
};

export default SingleImageCard;
