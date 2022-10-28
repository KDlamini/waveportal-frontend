import React from 'react'
import Characters from './api';

function CharacterCard() {
  return (
    <div className="character-wrapper">
        {
            Characters.map((character) => {
                const { studio, name, image, logo } = character;

                return (
                    <div key={name} className={`character-card ${studio}`}>
                        <h1 className="studio">{studio}</h1>
            
                        <img className="character-image" src={image} alt="iron-man"  />
            
                        {logo && <img className="character-logo" src={logo} alt="iron-man-logo" />}
                    </div>
                )
            })
        }
    </div>
  )
}

export default CharacterCard