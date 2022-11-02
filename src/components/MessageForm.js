import React from 'react'

function MessageForm({ wave, writeMessage, setWriteMessage, setModalIsOpen }) {
    const [message, setMessage] = React.useState('');
    const { name, index, image } = writeMessage;

    const handleSubmit = (e) => {
        e.preventDefault();

        wave(name, index, message);
        setMessage('')
        setWriteMessage({status: false})
        setModalIsOpen(false)
    }

    return (
        <div className="message-form-wrapper">
            <img className="form-image character-image" src={image} alt="character"  />
            <form className="message-form" onSubmit={(e) => handleSubmit(e)}>
            <p className="message-form-title">Say something to @<b>{name}</b></p>
                <textarea
                    type="text"
                    placeholder="Write new message"
                    className="message-textarea"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
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