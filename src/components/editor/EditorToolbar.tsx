import React from 'react';
import { Play, Copy, Download, RotateCcw, Settings, Layout, FileCode2 } from 'lucide-react';

interface EditorToolbarProps {
  onRun: () => void;
  onReset: () => void;
  onCopy: () => void;
  onDownload: () => void;
  onToggleSettings: () => void;
  onToggleLayout: () => void;
}

export const EditorToolbar: React.FC<EditorToolbarProps> = ({
  onRun,
  onReset,
  onCopy,
  onDownload,
  onToggleSettings,
  onToggleLayout,
}) => {
  return (
    <div className="bg-gray-800 text-white p-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button
          onClick={onRun}
          className="flex items-center gap-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 rounded-md"
        >
          <Play className="w-4 h-4" />
          Run
        </button>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-700 rounded-md"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={onCopy}
          className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-700 rounded-md"
        >
          <Copy className="w-4 h-4" />
          Copy
        </button>
        <button
          onClick={onDownload}
          className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-700 rounded-md"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
        <button
          onClick={onToggleLayout}
          className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-700 rounded-md"
        >
          <Layout className="w-4 h-4" />
          Layout
        </button>
        <button
          onClick={onToggleSettings}
          className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-700 rounded-md"
        >
          <Settings className="w-4 h-4" />
          Settings
        </button>
      </div>
    </div>
  );
};