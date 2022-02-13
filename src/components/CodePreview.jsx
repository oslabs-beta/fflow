import React from 'react';
import TabContainer from './TabContainer';
import '../stylesheets/CodePreview.css';
import '../stylesheets/Terminal.css';

const CodePreview = () => {
  return (
    <div className='codePreviewContainer'>
      <TabContainer />
    </div>
  );
};

export default CodePreview;
