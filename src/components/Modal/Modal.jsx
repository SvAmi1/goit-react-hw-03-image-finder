import { BigImage, CloseModalBtn } from 'components/GlobalStyle';
import { MdClear } from 'react-icons/md';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 6666,
  },

  content: {
    maxWidth: 'fit-content',
    maxHeight: 'fit-content',
    margin: 'auto',
    overflow: 'none',
    inset: 0,
    border: 'none',
    background: 'none',
    padding: 0,
  },
};

export const ModalBox = ({ bigImg, alt, onClose, state }) => {
  return (
    <Modal isOpen={state} onRequestClose={onClose} style={customStyles}>
      <>
        <BigImage src={bigImg} alt={alt} />
        <CloseModalBtn onClick={onClose}>
          <MdClear />
        </CloseModalBtn>
      </>
    </Modal>
  );
};