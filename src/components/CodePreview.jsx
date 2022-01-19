import * as React from 'react';
import '../stylesheets/CodePreview.css';
//import MonacoEditor from 'react-monaco-editor';
//import Editor, { useMonaco } from "@monaco-editor/react";

const CodePreview = () => {

  return (
    <div className="codePreviewContainer">
    CODE PREVIEW
  
    {/* <Editor
     height="80vh"
     defaultLanguage="javascript"
     defaultValue="see your component code here..."
     theme="vs-dark"
    //  options={{
    //           minimap: {
    //             enabled: false,
    //           },
    //           fontSize: 14,
    //           cursorStyle: "block",
    //           wordWrap: "on",
    //         }}
    //  theme="amy"
    /> */}
    </div>
  )
}


export default CodePreview;
