import React, { useState, useMemo, useCallback } from "react";
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

const [suggestions, setSuggestions] = useState(mentions);

const { MentionSuggestions, plugins } = useMemo(() => {
  const mentionPlugin = createMentionPlugin({
    mentionPrefix: '@',
  });

  const { MentionSuggestions } = mentionPlugin;
  const plugins = [mentionPlugin];
  return { plugins, MentionSuggestions };
}, []);

const onSearchChange = useCallback(({ value }) => {
  setSuggestions(defaultSuggestionsFilter(value, mentions));
}, [mentions]);

return (
    <div
    className="editor"
    >
        <Editor
            editorKey={'editor'}
            editorState={editorState}
            onChange={setEditorState}
            plugins={plugins}
            placeholder="Write a message e.g Hey @Spider-Man, use your spider ting to sense the bad guys!"
        />
        <MentionSuggestions
            onSearchChange={onSearchChange}
            suggestions={suggestions}
        />
    </div>
);
}

export default TextInput;
