import React from 'react';
import '../stylesheets/Navigation.css';
import { toggleLeftPanel } from '../redux/navigationSlice';
import { clearProject, saveComponentCode } from '../redux/canvasSlice';
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
    <div className='navigation-bar text-white bg-gradient-to-r from-violet-700 to-indigo-500'>
      <span className='nav-icons'>
        <FaPencilRuler data-testid='dnd-button' onClick={openDnD} />
      </span>
      <span className='nav-icons'>
        <FaFolderOpen data-testid='filetree-button' onClick={openFileTree} />
      </span>
      <span className='nav-icons'>
        <FaSave data-testid='save-button' onClick={handleSave} />{' '}
      </span>
      <span className='nav-icons'>
        <FaDownload
          data-testid='export-button'
          onClick={() => {
            exportApp(snapshot);
          }}
        />
      </span>
      <span className='nav-icons'>
        <FaTrash data-testid='trash-button' onClick={clear} />
      </span>
    </div>
  );
};

export default Navigation;
