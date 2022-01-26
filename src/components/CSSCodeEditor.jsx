import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import { useSelector } from 'react-redux';

function CSSCodeEditor() {
  
  const [editorValue, setEditorValue] = useState(`// Give your project some styling here\n`);
  
  const theme = useSelector(state => state.theme.currTheme);  
  return (
  <div>
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
