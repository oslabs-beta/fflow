import * as React from 'react';
import '../stylesheets/DnD.css';
import CompCreator from './compCreator';
import TagCreator from './TagCreator';
import DragList from './DragList';

const DnD = () => {
  return (
    <div className='dndContainer'>
        <p id='app-name'
          style={{ fontSize: '20px', fontWeight: '700', color: 'var(--navigation-panel-background-color)'}}>
          App Name
        </p>
        <CompCreator />
        <TagCreator />
        <DragList />
      </div>
  );
};

export default DnD;
