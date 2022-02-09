import React from 'react';
import Editor from '@monaco-editor/react';
import { useSelector } from 'react-redux';

const CSSCodeEditor = () => {
  const theme = useSelector((state) => state.theme.currTheme);
  const cssCode = useSelector((state) => state.canvas.cssCode);

  const onChange = (newValue) => console.log('cssEditorCode after edits: ', newValue);

  return (
    <div id='css-code-editor'>
      <Editor
        height='100vh'
        theme={theme}
        defaultLanguage='css'
        defaultValue={cssCode}
        onChange={onChange}
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 15,
          cursorStyle: 'line',
          wordWrap: 'on',
        }}
      />
    </div>
  );
};

export default CSSCodeEditor;
