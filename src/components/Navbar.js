import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function Navbar() {
  return (
    <div className="navbar">
        <p className="logo">SMART PORTAL</p>
        <div className="connection-status">
            <FontAwesomeIcon icon={regular('circle')} />
            {' '}
            <span>Connected</span>
        </div>
    </div>
  )
}

export default Navbar