import React from 'react'
import Vision from '../assets/images/Vision.png'

function MessageCard({ defaultAccount }) {
  return (
    <div className="message-card">
      <div className="msg-image-wrapper">
        <img className="msg-image" src={Vision} alt="iron-man"  />
      </div>
      <div className="message-content">
        <p>
          <span have role="img" aria-label="Emoji">💬</span>
          {' '}
          This is where the message from the Blockchain will be.
        </p>
        <hr></hr>
        <p className="msg-details">
          <span have role="img" aria-label="Emoji">✍🏾</span>
          {' '}
          <b>Author: </b>{defaultAccount}
        </p>
        <p className="msg-details">
          <span have role="img" aria-label="Emoji">🕝</span>
          {' '}
          <b>11:26:12 PM - Nov, 2, 2022</b>
        </p>
      </div>
    </div>
  )
}

export default MessageCard