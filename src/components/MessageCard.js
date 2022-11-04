import React from 'react'
import parse from 'html-react-parser';
import CharacterData from './api';

function MessageCard({ data }) {
  const { address, message, characterIndex, timestamp} = data;

  const regex = /(\B@\w+)/g; 
  const newMessage = message.replace(regex, '<span className="mention">$1</span>');


  return (
    <div className="message-card">
      <button className="msg-image-wrapper">
        <img className="msg-image" src={CharacterData[characterIndex].image} alt="movie character"  />
      </button>
      <div className="message-content">
        <p>
          <span role="img" aria-label="Emoji">💬</span>
          {' '}
          {parse(newMessage)}
        </p>
        <hr></hr>
        <p className="msg-details">
          <span role="img" aria-label="Emoji">✍🏾</span>
          {' '}
          <b>Author: </b>{address}
        </p>
        <p className="msg-details">
          <span role="img" aria-label="Emoji">🕝</span>
          {' '}
          <b>{timestamp.toString()}</b>
        </p>
      </div>
    </div>
  )
}

export default MessageCard