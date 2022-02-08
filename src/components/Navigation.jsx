import React from 'react';
import '../stylesheets/Navigation.css';
import { toggleLeftPanel, saveComponentCode } from '../redux/navigationSlice';
import { clearProject } from '../redux/canvasSlice';
import { useSelector, useDispatch } from 'react-redux';
import exportApp from './ExportApp';
import { FaPencilRuler, FaFolderOpen, FaSave, FaDownload, FaTrash, FaRegWindowRestore } from 'react-icons/fa';

const Navigation = () => {
  const dispatch = useDispatch();

  const snapshot = useSelector((state) => state.canvas);

  // functions to toggle between DnD and fileTree
  const openDnD = () => {
    console.log('clicked home');
    console.log('snapshot: ', snapshot);
    dispatch(toggleLeftPanel('DnD'));
  };

  const openFileTree = () => {
    console.log('clicked tree');
    console.log('snapshot: ', snapshot);
    dispatch(toggleLeftPanel('fileTree'));
  };

  const clear = () => {
    if (confirm('Are you sure you want to clear project?')) dispatch(clearProject());
  };

  // component code should save before exporting
  // let currentFile = useSelector((state) => state.canvas.currentFile);
  // const currentCode = useSelector((state) => state.canvas.code);

  // const exportAppHandleClick = () => {
  //   dispatch(saveComponentCode({ currentCode, currentFile }));
  //   exportApp(snapshot);
  // };

  return (
    <div className='navigation-bar'>
      <span className='nav-icons'>
        <FaPencilRuler onClick={openDnD} />
      </span>
      <span className='nav-icons'>
        <FaFolderOpen onClick={openFileTree} />
      </span>
      <span className='nav-icons'>
        <FaSave onClick={() => console.log('Save Button pressed')} />
      </span>
      <span className='nav-icons'>
        <FaDownload onClick={() => exportApp(snapshot)} />
      </span>
      {/* <span className='nav-icons'>
        <FaDownload onClick={exportAppHandleClick} />
      </span> */}
      <span className='nav-icons'>
        <FaTrash onClick={clear} />
      </span>
    </div>
  );
};

export default Navigation;
