export const runCode = async (code: string, language: string): Promise<{ output: string; error: string | null }> => {
  try {
    switch (language) {
      case 'javascript':
        // Create a safe evaluation environment
        const result = new Function(`
          let console = { 
            log: function(...args) { 
              window._output.push(args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
              ).join(' ')); 
            },
            error: function(...args) { 
              window._output.push('Error: ' + args.join(' ')); 
            },
            warn: function(...args) { 
              window._output.push('Warning: ' + args.join(' ')); 
            }
          };
          window._output = [];
          ${code};
          return window._output.join('\\n');
        `)();
        return { output: result, error: null };

      case 'html':
        // For HTML, include basic CSS reset and viewport meta
        const htmlTemplate = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body { margin: 0; font-family: system-ui, sans-serif; }
              </style>
            </head>
            <body>${code}</body>
          </html>
        `;
        return { output: htmlTemplate, error: null };

      case 'css':
        // For CSS, create a preview with some HTML elements
        const cssPreview = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>${code}</style>
            </head>
            <body>
              <div class="preview">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <p>Paragraph text</p>
                <button>Button</button>
                <div class="box">Box Element</div>
              </div>
            </body>
          </html>
        `;
        return { output: cssPreview, error: null };

      default:
        return {
          output: '',
          error: `Language "${language}" execution is not supported in the browser.`
        };
    }
  } catch (err) {
    return {
      output: '',
      error: err instanceof Error ? err.message : 'An unknown error occurred'
    };
  }
};