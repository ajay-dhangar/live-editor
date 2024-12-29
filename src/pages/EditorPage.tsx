import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Split from 'split.js';
import { MonacoEditor } from '../components/editor/MonacoEditor';
import { EditorToolbar } from '../components/editor/EditorToolbar';
import { EditorSettings } from '../components/editor/EditorSettings';
import { OutputPanel } from '../components/editor/OutputPanel';
import { runCode } from '../utils/codeRunner';
import { technologies } from '../data/technologies';

export const EditorPage = () => {
  const { technology } = useParams();
  const navigate = useNavigate();
  const tech = technologies.find(t => t.id === technology);

  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [editorSettings, setEditorSettings] = useState({
    theme: 'vs-dark',
    fontSize: 14,
    tabSize: 2,
    wordWrap: true,
    minimap: true,
  });

  const handleRun = async () => {
    const result = await runCode(code, technology || '');
    setOutput(result.output);
    setError(result.error);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${technology}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSettingChange = (key: string, value: any) => {
    setEditorSettings(prev => ({ ...prev, [key]: value }));
  };

  if (!tech) {
    return <div>Technology not found</div>;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <div className="bg-gray-800 px-4 py-2 flex items-center">
        <button
          onClick={() => navigate('/live-editor')}
          className="flex items-center text-gray-300 hover:text-white"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <h1 className="ml-4 text-xl font-semibold text-white">{tech.name} Editor</h1>
      </div>

      <EditorToolbar
        onRun={handleRun}
        onReset={() => setCode('')}
        onCopy={handleCopy}
        onDownload={handleDownload}
        onToggleSettings={() => setShowSettings(!showSettings)}
        onToggleLayout={() => {}}
      />

      <div className="flex-1 flex">
        <div className="flex-1 relative">
          <MonacoEditor
            language={technology || ''}
            theme={editorSettings.theme}
            value={code}
            onChange={setCode}
          />
          <EditorSettings
            isOpen={showSettings}
            onClose={() => setShowSettings(false)}
            settings={editorSettings}
            onSettingChange={handleSettingChange}
          />
        </div>
        <div className="flex-1">
          <OutputPanel
            language={technology || ''}
            output={output}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};