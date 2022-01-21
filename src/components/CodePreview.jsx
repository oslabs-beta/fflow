import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import '../stylesheets/CodePreview.css';
//import MonacoEditor from 'react-monaco-editor';
// import Editor from "@monaco-editor/react";
// import { ClockLoader as Loader } from "react-spinners";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";


const CodePreview = () => {

  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    // if (theme === 'dark') setTheme('monokai');
    // setTheme('github');
    setTheme(theme === "dark" ? "monokai" : "github");
  }
  // function handleEditorDidMount() {
  //   setIsEditorReady(true);
  // }

  function onChange(newValue) {
    console.log("change", newValue);
  }

  // add a theme dropdown option here
  const changeTheme = e => {
    setTheme(e.target.value);
  };


  return (
    <div className="codePreviewContainer">
    <div className='code-compiler'>
    <label for="code-editor-themes">Choose a Theme:</label>
      <select name="code-editor-themes" id="editor-names">
        <option value="monokai">Monokai</option>
        <option value="github">Github</option>
      </select>

      <select class="selectpicker" data-live-search="true" class="form-control" name="Language" id="mode" onchange="changeMode()">
              {/* <option value="JSX" id="JSX" selected>JSX</option> */}
              <option value="CSS" id="CSS" selected>CSS</option>
              <option value="JavaScript" id="JavaScript" selected>JavaScript</option>
            </select>
    </div>
     <button onClick={toggleTheme}>
        Toggle theme
      </button>

      <AceEditor
        width="100%"
        height="100%"
      placeholder="// Your code will show up here when you drag in a component or HTML element "
    mode="javascript"
    theme={theme}
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
            
    {/* <Editor
    height="75vh"
     theme={theme}
     loading={<Loader />}
     language="javascript"
     defaultValue=""
     editorDidMount={handleEditorDidMount}
     options={{
              minimap: {
                enabled: false,
              },
              fontSize: 14,
              cursorStyle: "block",
              wordWrap: "on",
            }}
    /> */}
    </div>
  )
}


export default CodePreview;
