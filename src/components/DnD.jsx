import * as React from 'react';
import '../stylesheets/DnD.css';
import CompCreator from './compCreator';
import TagCreator from './TagCreator';
import DragList from './DragList';

const DnD = () => {
  return (
    <div className='dndContainer'>
      <div id='dndBody'>
        <p
          style={{ fontSize: '20px', marginBottom: '30px', fontWeight: '700' }}>
          App Name
        </p>
        <CompCreator />
        <TagCreator />
        <DragList />
      </div>
    </div>
  );
};

export default DnD;
