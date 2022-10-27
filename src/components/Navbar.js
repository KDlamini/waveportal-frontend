import React from 'react'

function Navbar({ isConnected }) {
  return (
    <div className="navbar">
        <p className="logo">SMART PORTAL</p>
        <div className="connection-status">
            <span className={isConnected ? "connection-icon active": "connection-icon"}></span>
            {' '}
            <span>
            {isConnected ? 'Connected': 'Disconnected'}
            </span>
        </div>
    </div>
  )
}

export default Navbar