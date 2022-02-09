import React from 'react';
import Editor, { monaco, loader } from '@monaco-editor/react';
import { useSelector } from 'react-redux';

const path = require('path');

function ensureFirstBackSlash(str) {
  return str.length > 0 && str.charAt(0) !== '/' ? '/' + str : str;
}

function uriFromPath(_path) {
  const pathName = path.resolve(_path).replace(/\\/g, '/');
  return encodeURI('file://' + ensureFirstBackSlash(pathName));
}

loader.config({
  paths: {
    vs: uriFromPath(path.join(__dirname, '../node_modules/monaco-editor/min/vs')),
  },
});

const JSCodeEditor = () => {
  const theme = useSelector((state) => state.theme.currTheme);
  const code = useSelector((state) => state.canvas.code);

  const onChange = (newValue) => console.log('updatedValue:', newValue);

  return (
    <div id='main-code-editor'>
      <Editor
        height='100vh'
        theme={theme}
        defaultLanguage='javascript'
        defaultValue='// Drag components onto canvas and see your code rendered'
        onChange={onChange}
        value={code}
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

export default JSCodeEditor;
