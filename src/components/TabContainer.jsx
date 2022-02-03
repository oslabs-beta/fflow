import React, { useEffect, useState } from 'react';
import CodeEditor from './CodeEditor';
import CSSCodeEditor from './CSSCodeEditor';
import '../stylesheets/CodePreview.css';
import * as monaco from 'monaco-editor';
import Tree from './Tree';
import { useSelector } from 'react-redux';

const TabContainer = () => {
  const [tabState, setTabState] = useState(1);
  const toggleTab = (tabNum) => setTabState(tabNum);

  // useEffect(() => {
  //   monaco.editor.create(document.getElementById('editor-container'), {
  //     // language: this._getLanguage(this.props.path),
  //     wordWrap: 'on',
  //     scrollBeyondLastLine: false,
  //     automaticLayout: true,
  //     minimap: {
  //       enabled: false
  //     },
  //     // glyphMargin: true,
  //     value: "function hello() {\n\talert('Hello world!');\n}",
  //     language: 'javascript',
  //   });
  // });

  // Tree.File = File;
  // Tree.Folder = Folder;
  const fileState = useSelector((state) => state.canvas.files);

  const structure = [
    {
      type: 'folder',
      name: 'public',
      childrens: [
        {
          type: 'file',
          name: 'index.html',
        },
      ],
    },
    {
      type: 'folder',
      name: 'src',
      childrens: fileState,
    },
  ];

  return (
    <div>
      <div className='tabContainer'>
        <button className={tabState === 1 ? 'active-tab' : 'tabs'} onClick={() => toggleTab(1)}>
          Code Preview
        </button>
        {/* <button className={tabState === 2 ? 'active-tab' : 'tabs'} onClick={() => toggleTab(2)}>
          Terminal
        </button>
        <button className={tabState === 3 ? 'active-tab' : 'tabs'} onClick={() => toggleTab(3)}>
          CSS Editor
        </button> */}
      </div>
      <div className='contentContainer'>
        <div className={tabState === 1 ? 'active-content' : 'content'}>
          <CodeEditor />
        </div>
        {/* <div id='terminal' style={{ height: '50vh', width: '100%' }} className={tabState === 2 ? 'active-content' : 'content'}>
          <Tree data={structure} />
        </div>
        <div id='editor-container' style={{ height: '100vh', width: '100%' }} className={tabState === 3 ? 'active-content' : 'content'}>
          <CSSCodeEditor />
        </div> */}
      </div>
    </div>
  );
};

export default TabContainer;
