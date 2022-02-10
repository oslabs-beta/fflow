import * as React from 'react';
import '../stylesheets/DnD.css';
import CompCreator from './compCreator';
import DragList from './DragList';
import { useSelector, useDispatch } from 'react-redux';
import Tree from './Tree';
import { renderComponentCode, saveComponentCode } from '../redux/canvasSlice';

const DnD = () => {
  const toggleState = useSelector((state) => state.nav.toggle);
  const fileState = useSelector((state) => state.canvas.files);

  const structure = [
    {
      type: 'folder',
      name: 'dist',
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

  let currentFile = useSelector((state) => state.canvas.currentFile);
  const currentCode = useSelector((state) => state.canvas.code);
  const dispatch = useDispatch();

  const showAppCodeHandleClick = (e) => {
    const name = 'App.js';
    dispatch(saveComponentCode({ currentCode, currentFile }));
    dispatch(renderComponentCode({ name }));
  };

  return (
    <>
      {toggleState === 'DnD' ? (
        <div className='dndContainer'>
          <p
            // id='app-name'
            className='bg-clip-text text-transparent mt-3.5 text-2xl font-bold bg-gradient-to-r from-violet-700 to-cyan-400'
            data-testid='app-logo'
            onClick={showAppCodeHandleClick}
          >
            fflow.
          </p>
          <CompCreator />
          <DragList />
          <div className='homePageFileTreeContainer'>
            <h2 className='file-tree-heading'>FOLDERS</h2>
            <Tree data={structure} className='frontPageFileTree' />
          </div>
        </div>
      ) : (
        <div className='fileTreeContainer'>
          <p
            // id='app-name'
            className='bg-clip-text text-transparent mt-3.5 text-2xl font-bold bg-gradient-to-r from-violet-700 to-cyan-400'
            onClick={showAppCodeHandleClick}
          >
            fflow.
          </p>
          <h2 id='file-tree-heading-page2'>FOLDERS</h2>
          <Tree data={structure} />
        </div>
      )}
    </>
  );
};

export default DnD;
