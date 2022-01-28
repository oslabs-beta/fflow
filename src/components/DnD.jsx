import * as React from 'react';
import '../stylesheets/DnD.css';
import CompCreator from './compCreator';
import TagCreator from './TagCreator';
import DragList from './DragList';
import CustomComponents from './CustomComponents';

const DnD = () => {
  return (
    <div className='dndContainer'>
        <p id='app-name'>fflow.</p>
        <CompCreator />
        <TagCreator />
        <DragList />
      </div>
  );
};

export default DnD;
