import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import files from './files';
import { useSelector } from 'react-redux';

const CodeEditor = () => {
  const [fileName, setFileName] = useState('script.js');
  const file = files[fileName];

  const code = useSelector((state) => state.canvas.code);

  function onChange(newValue) {
    console.log('change', newValue);
  }

  return (
    <div id='main-code-editor'>
      <div id='language-chooser-container'>
        <button className='multi-editor-buttons' disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>
          JavaScript
        </button>
        <button className='multi-editor-buttons' disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
          CSS
        </button>
        <button className='multi-editor-buttons' disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
          HTML
        </button>
      </div>

      <Editor
        height='100vh'
        theme='vs-dark'
        path={file.name}
        defaultLanguage={file.language}
        // defaultValue={file.value}
        value={code}
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 14,
          cursorStyle: 'block',
          wordWrap: 'on',
        }}
      />
    </div>
  );
};

export default CodeEditor;
