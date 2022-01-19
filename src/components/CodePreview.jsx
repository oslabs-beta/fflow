import * as React from 'react';
import '../stylesheets/CodePreview.css';
import Editor from "@monaco-editor/react";
// import * as monaco from 'monaco-editor';


const CodePreview = () => {

  // const editorDidMount = (editor, monaco) => {
  //   editor.focus();
  // }

  
  // const onChange = (newValue, e) => {
  //   console.log('onChange', newValue, e);
  // }

  return (
    <div className="codePreviewContainer">
      <Editor
        height="80vh"
        // width="100vw"
        defaultLanguage="javascript"
        defaultValue="see your code here..."
        // editorDidMount={editorDidMount}
        // onChange={onChange}
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
