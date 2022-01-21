import * as React from 'react';
import '../stylesheets/DnD.css';
import CompCreator from './compCreator';
import TagCreator from './TagCreator';
import DragList from './DragList';

const DnD = () => {
  return (
    <div className="dndContainer">
      {/* <button id='explorer'>File Explorer</button> */}
      <div id="dndBody">
        <p style={{ fontSize: '20px' }}>Drag & Drop</p>
        <CompCreator />
        <TagCreator />
        <DragList />
      </div>
    </div>
  )
}

export default DnD;