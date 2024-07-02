import { DownloadIcon } from "@/components/icons";
import React from "react";

type Props = {
  onDownload?: () => void;
};

const DownloadButton = ({ onDownload }: Props) => {
  return (
    <div className="absolute right-0 top-0 z-50 flex cursor-pointer  items-center gap-2 p-3 text-white">
      <button
        className="z-50 cursor-pointer rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
        title="Download version"
        onClick={onDownload}
      >
        <DownloadIcon />
      </button>
    </div>
  );
};

export default DownloadButton;
