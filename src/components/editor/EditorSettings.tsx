import React from 'react';
import { X } from 'lucide-react';

interface EditorSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  settings: {
    theme: string;
    fontSize: number;
    tabSize: number;
    wordWrap: boolean;
    minimap: boolean;
  };
  onSettingChange: (key: string, value: any) => void;
}

export const EditorSettings: React.FC<EditorSettingsProps> = ({
  isOpen,
  onClose,
  settings,
  onSettingChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-0 right-0 h-full w-80 bg-gray-800 text-white p-4 shadow-lg z-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Editor Settings</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Theme</label>
          <select
            value={settings.theme}
            onChange={(e) => onSettingChange('theme', e.target.value)}
            className="w-full bg-gray-700 rounded-md px-3 py-2"
          >
            <option value="vs-dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Font Size</label>
          <input
            type="number"
            value={settings.fontSize}
            onChange={(e) => onSettingChange('fontSize', parseInt(e.target.value))}
            className="w-full bg-gray-700 rounded-md px-3 py-2"
            min="8"
            max="32"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tab Size</label>
          <input
            type="number"
            value={settings.tabSize}
            onChange={(e) => onSettingChange('tabSize', parseInt(e.target.value))}
            className="w-full bg-gray-700 rounded-md px-3 py-2"
            min="2"
            max="8"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Word Wrap</label>
          <input
            type="checkbox"
            checked={settings.wordWrap}
            onChange={(e) => onSettingChange('wordWrap', e.target.checked)}
            className="rounded bg-gray-700"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Minimap</label>
          <input
            type="checkbox"
            checked={settings.minimap}
            onChange={(e) => onSettingChange('minimap', e.target.checked)}
            className="rounded bg-gray-700"
          />
        </div>
      </div>
    </div>
  );
};