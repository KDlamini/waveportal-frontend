import React from 'react'

function MessageForm({ writeMessage, setWriteMessage }) {
    const { name, image } = writeMessage;

    return (
        <div className="message-form-wrapper">
            <img className="form-image character-image" src={image} alt="character"  />
            <form className="message-form">
            <p className="message-form-title">Say something to @<b>{name}</b></p>
                <textarea
                    type="text"
                    placeholder="Write new message"
                    className="message-textarea"
                >
                </textarea>

                <div className="message-actions">
                    <button
                        type="submit"
                        className="message-btn"
                        onClick={() => setWriteMessage({status: false})}
                    >
                    Cancel
                    </button>
                    &nbsp; &nbsp;
                    <button
                        type="submit"
                        className="message-btn"
                    >
                    Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MessageForm