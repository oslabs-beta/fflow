import React from 'react';
import '../stylesheets/Navigation.css';
import { toggleLeftPanel } from '../redux/navigationSlice';
import { clearProject } from '../redux/canvasSlice';
import { useSelector, useDispatch } from 'react-redux';
import exportApp from './ExportApp';
import { FaPencilRuler, FaFolderOpen, FaSave, FaDownload, FaTrash, FaRegWindowRestore } from 'react-icons/fa';

// import { modalToggle } from '../redux/navigationSlice';

const Navigation = () => {
  // const exportData = () => exportApp();
  const dispatch = useDispatch();

  // const show = (e) => dispatch(modalToggle(true));
  const snapshot = useSelector((state) => state.canvas);
  const handleSnap = () => {};

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
          onClick={(e) => {
            exportApp(snapshot);
            // show(e);
          }}
        />
      </span>
      {/* <FaDownload onClick={(e) => show(e)} /> */}
      <span className='nav-icons'>
        <FaTrash data-testid='trash-button' onClick={clear} />
      </span>
      <span className='nav-icons'>
        <FaRegWindowRestore />
      </span>
    </div>
  );
};

export default Navigation;
