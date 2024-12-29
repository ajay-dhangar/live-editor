import React from 'react';
import { AlertCircle } from 'lucide-react';

interface OutputPanelProps {
  output: string;
  error: string | null;
  language: string;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({ output, error, language }) => {
  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="flex items-center space-x-2 text-red-600 mb-2">
          <AlertCircle className="w-5 h-5" />
          <h3 className="font-semibold">Error</h3>
        </div>
        <pre className="text-red-700 text-sm overflow-auto whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  if (language === 'html') {
    return (
      <iframe
        title="preview"
        srcDoc={output}
        className="w-full h-full border-none bg-white"
        sandbox="allow-scripts"
      />
    );
  }

  return (
    <div className="bg-gray-900 p-4 h-full overflow-auto">
      <pre className="text-white text-sm font-mono whitespace-pre-wrap">
        <code>{output}</code>
      </pre>
    </div>
  );
};