import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

import CloseButton from "./CloseButton";
import DownloadButton from "./DownloadButton";

type Props = {
  open: boolean;
  onClose: () => void;
  imageURL: string;
};

type BackDropProps = {
  onClick: () => void;
};

type ModalOverlayProps = {
  onClose: () => void;
  children: ReactNode;
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

const ImageModal = ({ open, onClose, imageURL }: Props) => {
  const Modal = ({ open, onClose, children }: ModalProps) => {
    if (!open) {
      return null;
    }

    const modalDiv = document.getElementById("modalOverlay");

    return (
      <>
        {modalDiv &&
          ReactDOM.createPortal(<BackDrop onClick={onClose} />, modalDiv)}
        {modalDiv &&
          ReactDOM.createPortal(
            <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
            modalDiv,
          )}
      </>
    );
  };

  const BackDrop = ({ onClick }: BackDropProps) => {
    return (
      <div
        role="presentation"
        className="fixed inset-0 z-20 h-screen w-screen overflow-hidden bg-black/70 backdrop-blur-2xl"
        onClick={onClick}
      />
    );
  };

  const onDownload = () => {
    console.log("Download");
  };

  const ModalOverlay = ({ onClose, children }: ModalOverlayProps) => {
    return (
      <div className="fixed inset-0 z-30">
        <div className="modal-dialog">
          <div className="modal-content relative z-30 flex aspect-[3/2] items-center justify-center">
            <CloseButton onClose={onClose} />
            <DownloadButton onDownload={onDownload} />
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Image
        src={imageURL}
        alt={imageURL}
        className=""
        width={720}
        height={480}
        sizes="(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw"
      />
    </Modal>
  );
};

export default ImageModal;
