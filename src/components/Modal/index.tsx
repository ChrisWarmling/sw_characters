import { ReactNode } from "react";
import ReactModal, { Styles } from "react-modal"

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void
  children: ReactNode
}

const styleModal: Styles = {
  overlay: {
    backgroundColor: 'rgba(21,30,29, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1d1e1f',
    border: 'none',
    width: '20rem',
    height: '30rem'
  }
}

export function Modal({ isOpen, closeModal, children }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={styleModal}
    >
      {children}
    </ReactModal>
  )
}