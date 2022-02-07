import React, { useState } from 'react';
import '../stylesheets/Navigation.css';
// import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLeftPanel } from '../redux/navigationSlice';
import { saveState } from '../localStorage';

const Navigation = () => {
  // const [showFormModal, setShowFormModal] = useState(false);

  // const handleClose = (e) => {
  //   e.preventDefault();
  //   console.log('clicked');
  //   setShowFormModal(false);
  // };
  // const handleShow = () => setShowFormModal(true);

  const codePreviewState = useSelector((state) => state.canvas.code);
  const currState = useSelector((state) => state.canvas);

  const exportData = () => {
    const exportCode = `data:text\;chatset=utf-8,${encodeURIComponent(codePreviewState)}`;
    const link = document.createElement('a');
    link.href = exportCode;
    link.download = 'App.jsx';
    link.click();
  };

  const dispatch = useDispatch();

  const openFileTree = () => {
    dispatch(toggleLeftPanel('fileTree'));
  };

  const openDnD = () => {
    dispatch(toggleLeftPanel('DnD'));
  };

  const handleSave = () => {
    saveState(currState);
    alert('Current project saved');
  };

  return (
    <div className='navigation-bar'>
      <button onClick={openDnD}>
        <i class='fas fa-pencil-ruler'></i>
      </button>
      <button onClick={openFileTree}>
        <i class='fas fa-folder-open'></i>
      </button>
      <a href='#'>
        <i class='fas fa-user'></i>
      </a>
      <a href='#'>
        <i class='fas fa-cog'></i>
      </a>
      <button onClick={handleSave}>
        <i class='fas fa-save'></i>
      </button>
      <button onClick={exportData}>
        <i class='fas fa-download'></i>
      </button>

      {/* <button id='profileButton' onClick={() => setShowFormModal(true)}>
        <i class='fas fa-user'></i> */}
      {/* {showFormModal ? <Login handleClose={handleClose} /> : null} */}
      {/* {<Login showFormModal={showFormModal} setShowFormModal={setShowFormModal} />} */}
      {/* {<Login showFormModal={showFormModal} handleClose={handleClose} />} */}
      {/* </button> */}
    </div>
  );
};

export default Navigation;
