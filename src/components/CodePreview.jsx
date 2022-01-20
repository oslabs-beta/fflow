import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import '../stylesheets/CodePreview.css';
//import MonacoEditor from 'react-monaco-editor';
import Editor from "@monaco-editor/react";
import { ClockLoader as Loader } from "react-spinners";

const CodePreview = () => {

  const [theme, setTheme] = useState("dark");


function toggleTheme() {
    setTheme(theme === "dark" ? "vs-dark" : "light");
  }

  return (
    <div className="codePreviewContainer">
     <button onClick={toggleTheme}>
        Toggle theme
      </button>

    <Editor
    height="40vh"
     theme={theme}
     loading={<Loader />}
     language="javascript"
     defaultValue=""
    
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
  )
}


export default CodePreview;
