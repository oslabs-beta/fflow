import * as React from 'react';
import '../stylesheets/DnD.css';
import CompCreator from './compCreator';
// import TagCreator from './TagCreator';
import DragList from './DragList';
import CustomComponents from './CustomComponents';
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
          <p id='app-name' onClick={showAppCodeHandleClick}>
            fflow.
          </p>

          <CompCreator />
          {/* <TagCreator /> */}
          <DragList />
          <div className='homePageFileTreeContainer'>
            <h2 className='file-tree-heading'>FOLDERS</h2>
            <Tree data={structure} className='frontPageFileTree' />
          </div>
        </div>
      ) : (
        <div className='fileTreeContainer'>
          <p id='app-name' onClick={showAppCodeHandleClick}>
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
