import React, { useState } from "react";
import Editor from "draft-js-plugins-editor";
import createMentionPlugin, {
  defaultSuggestionsFilter
} from "draft-js-mention-plugin";
import CharacterData from "./api";
import "draft-js-mention-plugin/lib/plugin.css";

const TextInput = ({editorState, setEditorState}) => {
const mentions = CharacterData.map(item => {
  return {
    avatar: item.image,
    name: item.name.split(' ').join('_'),
  };
});
console.log(mentions)
const [suggestions, setSuggestions]= useState(mentions)
const [mentionPlugin] = useState(createMentionPlugin({
  entityMutability: 'IMMUTABLE',
  mentionPrefix: '@',
  supportWhitespace: true,
}));
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const onSearchChange = ({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  };

return (
    <div className="editor">
        <Editor
            editorState={editorState}
            onChange={setEditorState}
            plugins={plugins}
            placeholder="Write a message with @mentions"
        />
        <MentionSuggestions
            onSearchChange={onSearchChange}
            suggestions={suggestions}
        />
    </div>
);
}

export default TextInput;
