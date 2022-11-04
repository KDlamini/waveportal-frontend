import React from 'react'
import { EditorState } from "draft-js";
import Editor from './Editor';

function MessageForm({ wave, writeMessage, setWriteMessage, setModalIsOpen }) {
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );
    const { name, index, image } = writeMessage;

    const extractText = () => {
        const contentState = editorState.getCurrentContent().getPlainText();
        return contentState;
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = extractText()

        wave(name, index, message)
        setEditorState(() => EditorState.createEmpty())
        setWriteMessage({status: false})
        setModalIsOpen(false)
    }

    return (
        <div className="message-form-wrapper">
            <img className="form-image character-image" src={image} alt="character"  />
            <form className="message-form" onSubmit={(e) => handleSubmit(e)}>
            <p className="message-form-title">Say something as @<b>{name.split(' ').join('_')}</b></p>
                <Editor editorState={editorState} setEditorState={setEditorState}/>
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