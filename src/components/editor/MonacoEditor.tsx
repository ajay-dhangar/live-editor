import React, { useRef, useEffect } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { EditorState } from '../../types/editor';

interface MonacoEditorProps {
  language: string;
  theme: string;
  value: string;
  onChange: (value: string) => void;
  onMount?: (editor: any, monaco: Monaco) => void;
}

export const MonacoEditor: React.FC<MonacoEditorProps> = ({
  language,
  theme,
  value,
  onChange,
  onMount,
}) => {
  const editorRef = useRef(null);

  return (
    <Editor
      height="100%"
      defaultLanguage={language}
      defaultValue={value}
      theme={theme}
      onChange={(value) => onChange(value || '')}
      onMount={(editor, monaco) => {
        editorRef.current = editor;
        if (onMount) onMount(editor, monaco);
      }}
      options={{
        fontSize: 14,
        minimap: { enabled: true },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        formatOnPaste: true,
        formatOnType: true,
        suggestOnTriggerCharacters: true,
        tabSize: 2,
        wordWrap: 'on',
        lineNumbers: 'on',
        folding: true,
        links: true,
        contextmenu: true,
        quickSuggestions: true,
        acceptSuggestionOnCommitCharacter: true,
        acceptSuggestionOnEnter: 'on',
        autoClosingBrackets: 'always',
        autoClosingQuotes: 'always',
        autoIndent: 'full',
        colorDecorators: true,
        cursorBlinking: 'blink',
        cursorSmoothCaretAnimation: 'on',
        dragAndDrop: true,
        guides: {
          bracketPairs: true,
          indentation: true,
        },
      }}
    />
  );
};