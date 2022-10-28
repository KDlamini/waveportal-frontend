import React from 'react'
import IronMan from '../assets/images/Captain-America.png'
import IronManLogo from '../assets/images/Captain-America-logo.png'

function CharacterCard() {
  return (
    <div className="character-wrapper">
        <div className="character-card">
            <h1>MARVEL</h1>

            <img className="character-image" src={IronMan} alt="iron-man"  />

            <img className="character-logo" src={IronManLogo} alt="iron-man-logo" />
        </div>
    </div>
  )
}

export default CharacterCard