import React, { useState } from 'react';
import '../stylesheets/Navigation.css';
// import ExportApp from './ExportApp';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLeftPanel } from '../redux/navigationSlice';
import { IconContext } from 'react-icons';
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
      <IconContext.Provider value={{ color: '#ffffff', opacity: '0.8', padding: '1.2rem', className: 'nav-icons' }}>
        <div>
          <FaPencilRuler onClick={openDnD} />
          <FaFolderOpen onClick={openFileTree} />
          <FaDownload onClick={() => console.log(`Export Button Clicked`)} />
          <FaTrash onClick={clearProject} />
          <FaRegWindowRestore />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Navigation;
