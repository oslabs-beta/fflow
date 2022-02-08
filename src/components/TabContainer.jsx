import React, { useState } from 'react';
import JSCodeEditor from './JSCodeEditor';
import CSSCodeEditor from './CSSCodeEditor';
import '../stylesheets/CodePreview.css';

const TabContainer = () => {
  const [tabState, setTabState] = useState(1);
  const toggleTab = (tabNum) => setTabState(tabNum);

  return (
    <div>
      <div className='tabContainer'>
        <button className={tabState === 1 ? 'active-tab' : 'tabs'} onClick={() => toggleTab(1)}>
          Code Preview
        </button>
        <button className={tabState === 2 ? 'active-tab' : 'tabs'} onClick={() => toggleTab(2)}>
          Terminal
        </button>
        <button className={tabState === 3 ? 'active-tab' : 'tabs'} onClick={() => toggleTab(3)}>
          CSS Editor
        </button>
      </div>
      <div className='contentContainer'>
        <div className={tabState === 1 ? 'active-content' : 'content'}>
          <JSCodeEditor />
        </div>
        <div id='terminal' style={{ height: '50vh', width: '100%' }} className={tabState === 2 ? 'active-content' : 'content'}></div>
        <div className={tabState === 3 ? 'active-content' : 'content'}>
          <CSSCodeEditor />
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
