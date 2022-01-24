import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import CSSCodeEditor from './CSSCodeEditor';
import '../stylesheets/CodePreview.css';
import '../stylesheets/TabContainer.css'

const TabContainer = () => {

  const [tabState, setTabState] = useState(1);
  const toggleTab = (tabNum) => setTabState(tabNum);
  
  return (
  <div>

    <div className="tabContainer">
        <button className={tabState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Code Preview</button>
        <button className={tabState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Terminal</button>
        <button className={tabState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>CSS Editor</button>
      </div>
      
    <div className="contentContainer">
        <div id='code-editor-container' className={tabState === 1 ? "content  active-content" : "content"}><CodeEditor/></div>
        <div id='terminal' className={tabState === 2 ? "content  active-content" : "content"}></div>
        <div className={tabState === 3 ? "content  active-content" : "content"}><CSSCodeEditor/></div>
    </div>

  </div>
)
};

export default TabContainer;
