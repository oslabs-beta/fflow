import * as React from 'react';
import { useState } from 'react';
import '../stylesheets/CodePreview.css';
import Editor from "@monaco-editor/react";
// import { Terminal } from 'xterm';
// import '../stylesheets/Terminal.css';




const CodePreview = () => {

  const [tabState, setTabState] = useState(1);

  const toggleTab = (tabNum) => {
    setTabState(tabNum);
  }

  // const newTerm = () => {
  //   const term = new Terminal();
  //   term.open();
  //   term.write('Hello');
  // }

  return (

    <div className="codePreviewContainer">
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
      <div className={tabState === 1 ? "content  active-content" : "content"}><div className="codeEditorContainer">
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
    </div>
  )
}


export default CodePreview;
