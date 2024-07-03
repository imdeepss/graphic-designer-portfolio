import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import CloseButton from "./CloseButton";
import DownloadButton from "./DownloadButton";
import { useLockBodyScroll } from "@/app/hooks";

type Props = {
  open: boolean;
  onClose: () => void;
  imageURL: string;
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const BackDrop = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      role="presentation"
      className="fixed inset-0 z-20 h-screen w-screen bg-black/70 backdrop-blur-2xl"
      onClick={onClick}
    />
  );
};

const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className="modal fixed inset-0 z-30 mx-auto max-w-[600px] rounded-md p-5 outline-none">
      {children}
    </div>
  );
};

const ImageModal = ({ open, onClose, imageURL }: Props) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(imageURL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "image.jpg");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  useLockBodyScroll(open);

  if (!open) {
    return null;
  }

  const modalDiv = document.getElementById("modalOverlay");

  return modalDiv
    ? ReactDOM.createPortal(
        <>
          <BackDrop onClick={onClose} />
          <ModalOverlay>
            <div className="modal-dialog relative h-full w-auto overflow-hidden rounded-md">
              <div className="modal-content pointer-events-auto relative h-full w-full overflow-y-auto">
                <DownloadButton onDownload={handleDownload} />
                <CloseButton onClose={onClose} />
                <Image
                  src={imageURL}
                  alt={imageURL}
                  className="object-contain shadow-xl"
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
              </div>
            </div>
          </ModalOverlay>
        </>,
        modalDiv,
      )
    : null;
};

export default ImageModal;
