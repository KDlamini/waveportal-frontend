import React from 'react'
import CharacterData from './api';

function MessageCard({ data }) {
  const { address, message, characterIndex, timestamp} = data;

  return (
    <div className="message-card">
      <div className="msg-image-wrapper">
        <img className="msg-image" src={CharacterData[characterIndex].image} alt="movie character"  />
      </div>
      <div className="message-content">
        <p>
          <span role="img" aria-label="Emoji">💬</span>
          {' '}
          {message}
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