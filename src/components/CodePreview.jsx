import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import '../stylesheets/CodePreview.css';
//import MonacoEditor from 'react-monaco-editor';
import Editor from "@monaco-editor/react";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";


const CodePreview = () => {

  const [theme, setTheme] = useState("dark");
  const [tabState, setTabState] = useState(1);

  const toggleTab = (tabNum) => {
    setTabState(tabNum);
  }

  const toggleTheme = () => {
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
{/* 
<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">

        <li class="mr-2" role="presentation">
        <button class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" id="code-editor-tab" data-tabs-target="#code-editor" type="button" role="tab" aria-controls="code-editor" aria-selected="false">Code Preview</button>
        </li>

        <li class="mr-2" role="presentation">
        <button class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 active" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Terminal</button>
        </li>

        <li class="mr-2" role="presentation">
        <button class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">CSS Editor</button>
        </li>

      </ul>
    </div> */}

      <div className="tabContainer">
        <button 
        className={tabState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}>Code Preview</button>
         <button
          className={tabState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>Terminal</button>
        <button
          className={tabState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>CSS Editor</button>
      </div>
      <div className="contentContainer">
      <div className={tabState === 1 ? "content  active-content" : "content"}>
      
      <div className="codeEditorContainer">
        {/* <Editor
        height="80vh"
        defaultLanguage="javascript"
        defaultValue="see your code here..."
        theme="vs-dark"
          options={{
                    minimap: {
                      enabled: false,
                    },
                    fontSize: 14,
                    cursorStyle: "block",
                    wordWrap: "on",
                  }}
          /> */}
           <div className='code-compiler'>
    {/* <label for="code-editor-themes">Choose a Theme:</label>
      <select name="code-editor-themes" id="editor-names">
        <option value="monokai">Monokai</option>
        <option value="github">Github</option>
      </select> */}

      {/* <select class="selectpicker" data-live-search="true" class="form-control" name="Language" id="mode" onchange="changeMode()">
              <option value="CSS" id="CSS" selected>CSS</option>
              <option value="JavaScript" id="JavaScript" selected>JavaScript</option>
            </select> */}
    </div>
     {/* <button id='code-editor-theme-toggle' onClick={toggleTheme}>
        Toggle theme
      </button> */}
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
        </div>
        </div>
        <div className={tabState === 2 ? "content  active-content" : "content"}>
      </div>
        
        
        <div className={tabState === 3 ? "content  active-content" : "content"}><div className="codeEditorContainer">
        <Editor
        height="80vh"
        defaultLanguage="javascript"
        defaultValue="see your code here..."
        theme="vs-dark"
          options={{
                    minimap: {
                      enabled: false,
                    },
                    fontSize: 14,
                    cursorStyle: "block",
                    wordWrap: "on",
                  }}
          />
          
        </div></div>
      </div>
    {/* <div className='code-compiler'>
    <label for="code-editor-themes">Choose a Theme:</label>
      <select name="code-editor-themes" id="editor-names">
        <option value="monokai">Monokai</option>
        <option value="github">Github</option>
      </select>

      <select class="selectpicker" data-live-search="true" class="form-control" name="Language" id="mode" onchange="changeMode()">
              <option value="CSS" id="CSS" selected>CSS</option>
              <option value="JavaScript" id="JavaScript" selected>JavaScript</option>
            </select>
    </div>
     <button onClick={toggleTheme}>
        Toggle theme
      </button> */}

      {/* <AceEditor
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
  }}/> */}
            
  
    </div>
  )
}


export default CodePreview;
