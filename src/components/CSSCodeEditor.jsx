import React, { useEffect } from 'react';
import * as monaco from 'monaco-editor';
import '../stylesheets/CodePreview.css';
import { useSelector } from 'react-redux';

function CSSCodeEditor() {
  // const [editorValue, setEditorValue] = useState(`// Give your project some styling here\n`);

  // const theme = useSelector((state) => state.theme.currTheme);

  // const cssContainer = document.createElement('div');
  // cssContainer.id = 'cssContainer';

  // monaco.editor.create(document.getElementById('editor-container')

  // validation settings
  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: true
  });
  
// compiler options
monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
	target: monaco.languages.typescript.ScriptTarget.ES6,
	allowNonTsExtensions: true
});

  const code = useSelector((state) => state.canvas.code);
  console.log('code is: ', code);
  let hold;

  useEffect(() => {
    hold = monaco.editor.create(document.getElementById('cssContainer'), {
      wordWrap: 'on',
      scrollBeyondLastLine: false,
      automaticLayout: true,
      minimap: {
        enabled: false,
      },
      // glyphMargin: true,
      // value: "function hello() {\n\talert('Hello world!');\n}",
      value: code,
      language: 'javascript',
    });
    console.log('hold is: ', hold);
    console.log('code in useEffect: ', code);
    // hold.getModels().onDidChangeContent((event) => {
    //   console.log('getModel ran');
    //   render();
    // });
  }, [code]);


  return <div id='cssContainer'>{/* {cssContainer} */}</div>;
}

export default CSSCodeEditor;
