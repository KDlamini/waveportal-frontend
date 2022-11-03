import React from 'react'

function CharacterCard({ characters, setWriteMessage }) {
  return (
    <div className="character-wrapper">
        {
            characters.map((character, index) => {
                const { studio, name, image, studioLogo } = character;

                return (
                    <button
                        type="button"
                        key={name}
                        className={`character-card ${studio}`}
                        onClick={() => setWriteMessage({status: true, name, index, image, studio})}
                    >
                        <img className={`studio-logo ${studio}`} src={studioLogo} alt="studio-logo" />
            
                        <img className="character-image" src={image} alt="character"  />
            
                        <h3 className="character-name">{name}</h3>
                    </button>
                )
            })
        }
    </div>
  )
}

export default CharacterCard