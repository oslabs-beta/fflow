import React, { useState } from 'react';
import Editor from "@monaco-editor/react";

function CSSCodeEditor() {
  
  const [theme, setTheme] = useState('vs-dark');
  const [editorValue, setEditorValue] = useState(`// Give your project some styling here \n`);

  return (
  <div>
      <div id='code-editor-theme-selector'>Code Editor Theme:
          <select name="theme" onChange={e => setTheme(e.currentTarget.value)}>
            <option value="vs-dark">vs-dark</option>
            <option value="vs-light">vs-light</option>
          </select>
      </div>
          <Editor
              height="100vh"
              defaultLanguage="css"
              value={editorValue}
              onChanged={setEditorValue}
              theme={theme}
              options={{
                minimap: {
                enabled: false,
                },
                fontSize: 16,
                cursorStyle: "block",
                wordWrap: "on",
              }}
            />
  </div>
  )
}

export default CSSCodeEditor;
