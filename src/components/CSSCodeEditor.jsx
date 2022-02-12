import React from 'react';
// import Editor from '@monaco-editor/react';
import MonacoEditor from 'react-monaco-editor';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateCss } from '../redux/canvasSlice';

const CSSCodeEditor = () => {
  const theme = useSelector((state) => state.theme.currTheme);
  const cssCode = useSelector((state) => state.canvas.cssCode);
  const dispatch = useDispatch();

  const onChange = (newValue) => {
    console.log('cssEditorCode after edits: ', newValue);
    dispatch(updateCss(newValue));
  };

  console.log('code in CSSCodeEditor: ', cssCode);

  return (
    <div id='css-code-editor'>
      <MonacoEditor
        height='100vh'
        theme={theme}
        language='css'
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
