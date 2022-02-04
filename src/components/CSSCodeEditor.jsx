import React from 'react';
import Editor from '@monaco-editor/react';
import { useSelector } from 'react-redux';

const CSSCodeEditor = () => {
  const theme = useSelector((state) => state.theme.currTheme);
  const onChange = (newValue) => console.log('change', newValue);

  // css editor currently is not in CSS I believe

  return (
    <div id='css-code-editor'>
      <Editor
        height='100vh'
        theme={theme}
        defaultLanguage='css'
        defaultValue='// Style your project here'
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
