import React from "react";
import Image from "next/image";

import Modal from "./Modal";

type Props = {
  open: boolean;
  onClose: () => void;
  imageURL: string;
};
const ImageModal = ({ open, onClose, imageURL }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Image src={imageURL} alt={imageURL} className="" fill />
    </Modal>
  );
};

export default ImageModal;
