import React from 'react'
import Modal from 'react-modal';
import CharacterCard from './CharacterCard'
import SearchBar from './SearchBar'
import MessageForm from './MessageForm'

function CharacterModal({ wave, modalIsOpen, setModalIsOpen, characters, setCharacters }) {
  const [writeMessage, setWriteMessage] = React.useState({status: false});

    const styles = {
      overlay: {
        backgroundColor: '1c1c1c1a',
      },
      content: {
        top: '45px',
        left: '40px',
        right: '40px',
        bottom: '5px',
        border: 'none',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '400',
        fontStyle: 'normal',
        background: 'radial-gradient(50% 50% at 50% 50%, #e3e3e3 1.77%, #9e9e9e 100%)',
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
        {
          writeMessage.status ? (
            <MessageForm wave={wave} writeMessage={writeMessage} setWriteMessage={setWriteMessage}/>
          ) : (
            <div>
              <SearchBar setCharacters={setCharacters} />
              <CharacterCard characters={characters} setWriteMessage={setWriteMessage}/>
            </div>
          )
        }
      </Modal>
    );
}

export default CharacterModal