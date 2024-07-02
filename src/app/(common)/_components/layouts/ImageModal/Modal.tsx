import { ReactNode } from "react";
import ReactDOM from "react-dom";
import CloseButton from "./CloseButton";
import DownloadButton from "./DownloadButton";

type BackDropProps = {
  onClick: () => void;
};

const BackDrop = ({ onClick }: BackDropProps) => {
  return (
    <div
      role="presentation"
      className="fixed inset-0 z-20 h-screen w-screen overflow-hidden bg-black/70 backdrop-blur-2xl"
      onClick={() => {
        onClick();
      }}
    />
  );
};

type ModalOverlayProps = {
  onClose: () => void;
  children: ReactNode;
};

const ModalOverlay = ({ onClose, children }: ModalOverlayProps) => {
  return (
    <div className="fixed inset-0 z-30 mx-auto flex h-screen w-full max-w-7xl items-center justify-center">
      <div className="modal-dialog w-full overflow-hidden">
        <div className="modal-content relative z-30 flex aspect-[3/2] items-center justify-center">
          <CloseButton onClose={onClose} />
          <DownloadButton />
          {children}
        </div>
      </div>
    </div>
  );
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};
const Modal = ({ open, onClose, children }: ModalProps) => {
  if (typeof window === "undefined" || !open) {
    return null;
  }

  const modalDiv = document.getElementById("modalOverlay");
  return (
    <>
      {modalDiv
        ? ReactDOM.createPortal(<BackDrop onClick={onClose} />, modalDiv)
        : null}
      {modalDiv
        ? ReactDOM.createPortal(
            <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
            modalDiv,
          )
        : null}
    </>
  );
};

export default Modal;
