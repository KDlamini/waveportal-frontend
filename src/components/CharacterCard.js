import React from 'react'

function CharacterCard({ characters, wave }) {
  return (
    <div className="character-wrapper">
        {
            characters.map((character) => {
                const { studio, name, image, studioLogo } = character;

                return (
                    <button
                        type="button"
                        key={name}
                        className={`character-card ${studio}`}
                        onClick={wave}
                    >
                        <img className={`studio-logo ${studio}`} src={studioLogo} alt="iron-man-logo" />
            
                        <img className="character-image" src={image} alt="iron-man"  />
            
                        <h3 className="character-name">{name}</h3>
                    </button>
                )
            })
        }
    </div>
  )
}

export default CharacterCard