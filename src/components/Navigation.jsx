import React from 'react';
import '../stylesheets/Navigation.css';
import { toggleLeftPanel } from '../redux/navigationSlice';
import { clearProject } from '../redux/canvasSlice';
import { useSelector, useDispatch } from 'react-redux';
import exportApp from './ExportApp';
import { FaPencilRuler, FaFolderOpen, FaSave, FaDownload, FaTrash } from 'react-icons/fa';

const Navigation = () => {
  const dispatch = useDispatch();

  const snapshot = useSelector((state) => state.canvas);

  // functions to toggle between DnD and fileTree
  const openDnD = () => {
    dispatch(toggleLeftPanel('DnD'));
  };

  const openFileTree = () => {
    dispatch(toggleLeftPanel('fileTree'));
  };

  const clear = () => {
    if (confirm('Are you sure you want to clear project?')) dispatch(clearProject());
  };

  return (
    <div className='navigation-bar'>
      <span className='nav-icons'>
        <FaPencilRuler data-testid='dnd-button' onClick={openDnD} />
      </span>
      <span className='nav-icons'>
        <FaFolderOpen data-testid='filetree-button' onClick={openFileTree} />
      </span>
      <span className='nav-icons'>
        <FaSave data-testid='save-button' onClick={() => console.log('Save Button pressed')} />{' '}
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
