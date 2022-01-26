import React, { useState } from 'react';
import '../stylesheets/Navigation.css';
// import Login from './Login';

const Navigation = () => {

  const [showFormModal, setShowFormModal] = useState(false);

  const handleClose = () => setShowFormModal(false);
  const handleShow = () => setShowFormModal(true);

  return (
    <div className='navigation-bar'>
      <a href="#"><i class="fas fa-pencil-ruler"></i></a>
      <a href="#"><i class="fas fa-user"></i></a>
      <a href="#"><i class="fas fa-cog"></i></a>
      <a href="#"><i class="fas fa-save"></i></a>
      <a href="#"><i class="fas fa-download"></i></a>

      {/* <button id='profileButton' onClick={() => setShowFormModal(true)}>
        <i class='fas fa-user'></i>
        {<Login showFormModal={showFormModal} onHide={handleClose}/>}
      </button> */}
      
    </div>
  )
}

export default Navigation;