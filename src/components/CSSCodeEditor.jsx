import React from 'react';
import Editor from '@monaco-editor/react';
import { useSelector } from 'react-redux';

const CSSCodeEditor = () => {
  const theme = useSelector((state) => state.theme.currTheme);
  const onChange = (newValue) => console.log('change', newValue);

  const cssCode = `html {
    box-sizing: border-box;
    height: 100%;
  }
  body { 
    margin: 0;
    padding-top: 20%;
    overflow: hidden;
    background-color: #272727;
    font-family: "Helvetica Neue";
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
  h1 {
    color: white;
    font-size: 3rem;
  }
  p {
    color: white;
    font-size: 1.5rem;
  }
  .default-spans {
    color: #4338ca;
  }`;

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
