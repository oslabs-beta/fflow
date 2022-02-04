import React, { useState } from 'react';
import '../stylesheets/Navigation.css';
// import ExportApp from './ExportApp';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLeftPanel } from '../redux/navigationSlice';

import { FaPencilRuler, FaFolderOpen, FaDownload, FaTrash, FaRegWindowRestore } from 'react-icons/fa';

// import Login from './Login';

const Navigation = () => {
  // const exportData = () => ExportApp();

  const dispatch = useDispatch();

  const clearProject = () => {
    if (confirm('Would you like to start fresh?')) {
      dispatch(clearComponents());
      // dispatch(refreshCode());
    }
  };

  // const [showFormModal, setShowFormModal] = useState(false);

  // const handleClose = (e) => {
  //   e.preventDefault();
  //   setShowFormModal(false);
  // };
  // const handleShow = () => setShowFormModal(true);

  const openFileTree = () => {
    dispatch(toggleLeftPanel('fileTree'));
  };

  const openDnD = () => {
    dispatch(toggleLeftPanel('DnD'));
  };

  return (
    <div className='navigation-bar'>
      <FaPencilRuler onClick={openDnD} />
      <FaFolderOpen onClick={openFileTree} />
      <FaDownload />
      <FaTrash onClick={clearProject} />
      <FaRegWindowRestore />
    </div>
  );
};

export default Navigation;
