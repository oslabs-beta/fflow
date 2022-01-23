import React, {useState } from 'react';
import ReactDOM from "react-dom";
import AceEditor from 'react-ace';

import '../stylesheets/CodePreview.css';
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = () => {

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => (theme === "dark" ? "monokai" : "github");
  
  // function handleEditorDidMount() {
  //   setIsEditorReady(true);
  // }
  function onChange(newValue) {
    console.log("change", newValue);
  }

  return (
    <div>
    <AceEditor
            width="100%"
            height="100%"
          placeholder="// Your code will show up here when you drag in a component or HTML element "
        mode="javascript"
        theme='monokai'
        onChange={onChange}
        fontSize={16}
        showPrintMargin={true}
        showGutter={true}
        readOnly={false}
        highlightActiveLine={true}
        name="editor"
        editorProps={{ $blockScrolling: false }}
        setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      showLineNumbers: true,
      tabSize: 2,
  }}/>
    </div>
  )
};

export default CodeEditor;
