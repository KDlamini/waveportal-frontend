import React from 'react'
import Modal from 'react-modal';
import CharacterCard from './CharacterCard'

function CharacterModal({ modalIsOpen, setModalIsOpen }) {
    const styles = {
      overlay: {
        backgroundColor: '1c1c1c1a',
      },
      content: {
        top: '45px',
        left: '40px',
        right: '40px',
        bottom: '15px',
        border: 'none',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '400',
        fontStyle: 'normal',
        background: '#b3232b',
        borderRadius: '2px',
        outline: 'none',
        padding: '0',
      },
    };
  
    return (
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={styles}
      >
        <div className="modal-close">
            <button
                type="button"
                className="modal-close-btn"
                onClick={() => setModalIsOpen(false)}
            >
                <i className="times icon" /> <span>Close</span>
            </button>
        </div>
        <CharacterCard />
      </Modal>
    );
}

export default CharacterModal