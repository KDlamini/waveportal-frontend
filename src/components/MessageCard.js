import React from 'react'
import Vision from '../assets/images/Vision.png'

function MessageCard({ defaultAccount }) {
  return (
    <div className="message-card">
      <div className="msg-image-wrapper">
        <img className="msg-image" src={Vision} alt="iron-man"  />
      </div>
      <div className="message-content">
        <p>{defaultAccount}</p>
      </div>
    </div>
  )
}

export default MessageCard