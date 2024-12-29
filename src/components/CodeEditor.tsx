import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import Split from 'split.js';
import { EditorState } from '../types/editor';

interface CodeEditorProps {
  language: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ language }) => {
  const [editorState, setEditorState] = useState<EditorState>({
    code: '',
    output: ''
  });

  useEffect(() => {
    Split(['#editor-container', '#preview-container'], {
      sizes: [50, 50],
      minSize: 300,
    });
  }, []);

  const handleEditorChange = (value: string = '') => {
    setEditorState(prev => ({
      ...prev,
      code: value
    }));

    // Update preview based on language
    if (language === 'html') {
      setEditorState(prev => ({
        ...prev,
        output: value
      }));
    }
  };

  return (
    <div className="h-screen flex">
      <div id="editor-container" className="flex-1">
        <div className="h-full">
          <Editor
            height="100%"
            defaultLanguage={language}
            theme="vs-dark"
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              wordWrap: 'on',
              automaticLayout: true,
            }}
          />
        </div>
      </div>
      <div id="preview-container" className="flex-1 bg-white">
        {language === 'html' && (
          <iframe
            title="preview"
            srcDoc={editorState.output}
            className="w-full h-full border-none"
            sandbox="allow-scripts"
          />
        )}
      </div>
    </div>
  );
};