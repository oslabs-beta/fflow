import React from 'react';
import '../stylesheets/Navigation.css';
import { toggleLeftPanel } from '../redux/navigationSlice';
import { saveState } from '../localStorage';
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
        <FaDownload
          onClick={(e) => {
            exportApp();
            // show(e);
          }}
        />
      </span>
      <span className='nav-icons'>
        <FaTrash onClick={clear} />
      </span>
      <span className='nav-icons'>
        <FaRegWindowRestore />
      </span>
    </div>
  );
};

export default Navigation;
