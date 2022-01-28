import React, { useState } from 'react';
import '../stylesheets/Navigation.css';
// import Login from './Login';
import { useSelector } from 'react-redux';


const Navigation = () => {
  const [showFormModal, setShowFormModal] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    console.log('clicked');
    setShowFormModal(false);
  };
  const handleShow = () => setShowFormModal(true);

  const codePreviewState = useSelector((state) => state.canvas.code);

  const exportData = () => {
    const exportCode = `data:text\;chatset=utf-8,${encodeURIComponent(codePreviewState)}`;
    const link = document.createElement('a');
    link.href = exportCode;
    link.download = 'App.jsx';
    link.click();
  };

  return (
    <div className='navigation-bar'>
      <a href='#'>
        <i class='fas fa-pencil-ruler'></i>
      </a>
      <a href="#"><i class="fas fa-user"></i></a>
      <a href='#'>
        <i class='fas fa-cog'></i>
      </a>
      <a href='#'>
        <i class='fas fa-save'></i>
      </a>
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
