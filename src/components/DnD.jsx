import * as React from 'react';
import '../stylesheets/DnD.css';
import CompCreator from './compCreator';
import TagCreator from './TagCreator';
import DragList from './DragList';
import CustomComponents from './CustomComponents';

const DnD = () => {
  return (
    <div className='dndContainer'>
        <p id='app-name'>App Name</p>
        <CompCreator />
        <CustomComponents />
        <TagCreator />
        <DragList />
      </div>
  );
};

export default DnD;
