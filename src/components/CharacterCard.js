import React from 'react'
import Characters from './api';

function CharacterCard() {
  return (
    <div className="character-wrapper">
        {
            Characters.map((character) => {
                const { studio, name, image, studioLogo } = character;

                return (
                    <div key={name} className={`character-card ${studio}`}>
                        <img className={`studio-logo ${studio}`} src={studioLogo} alt="iron-man-logo" />
            
                        <img className="character-image" src={image} alt="iron-man"  />
            
                        <h3 className="character-name">{name}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CharacterCard