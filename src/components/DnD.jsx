import * as React from 'react';
import '../stylesheets/DnD.css';
import CompCreator from './compCreator';
import TagCreator from './TagCreator';
import DragList from './DragList';
import CustomComponents from './CustomComponents';
import { useSelector } from 'react-redux';
import Tree from './Tree';

const DnD = () => {
  const toggleState = useSelector((state) => state.nav.toggle);
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
    <>
      {toggleState === 'DnD' ? (
        <div className='dndContainer'>
          <p id='app-name'>fflow.</p>
          <CompCreator />
          <TagCreator />
          <DragList />
        </div>
      ) : (
        <div className='fileTreeContainer'>
          <p id='app-name'>fflow.</p>
          <h3>File Tree</h3>
          <Tree data={structure} />
        </div>
      )}
    </>
  );
};

export default DnD;
