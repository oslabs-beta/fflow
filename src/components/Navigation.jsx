import React from 'react';
import '../stylesheets/Navigation.css';
import { toggleLeftPanel, saveComponentCode } from '../redux/navigationSlice';
import { clearProject } from '../redux/canvasSlice';
import { useSelector, useDispatch } from 'react-redux';
import exportApp from './ExportApp';
import { FaPencilRuler, FaFolderOpen, FaSave, FaDownload, FaTrash } from 'react-icons/fa';

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

  const handleSave = () => {
    saveState(snapshot);
    alert('Current project saved');
  };

  return (
    <div className='navigation-bar'>
      <span className='nav-icons'>
        <FaPencilRuler onClick={openDnD} />
      </span>
      <span className='nav-icons'>
        <FaFolderOpen onClick={openFileTree} />
      </span>
      <span className='nav-icons'>
        <FaSave onClick={handleSave} />
      </span>
      <span className='nav-icons'>
        <FaDownload onClick={exportApp(snapshot)} />
      </span>
      <span className='nav-icons'>
        <FaTrash onClick={clear} />
      </span>
    </div>
  );
};

export default Navigation;
