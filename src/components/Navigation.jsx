import React, { useState } from "react";
import '../stylesheets/Navigation.css';
import Login from './Login';
import Modal from 'react-modal';

const Navigation = () => {

  const [showLoginModal, setLoginModal] = useState(false);
  // const setLoginModal = () => setLoginModal(true); 

  return (
    <div className='navigation-bar'>
      <a href="#"><i class="fas fa-pencil-ruler"></i></a>
      <a href="#"><i class="fas fa-user"></i></a>
      <a href="#"><i class="fas fa-cog"></i></a>
      <a href="#"><i class="fas fa-save"></i></a>
      <a href="#"><i class="fas fa-download"></i></a>
      {/* <a href="#" onClick={setLoginModal}><i class="fas fa-user"></i></a> */}
      {/* <Login /> */}
    </div>
  )
}

export default Navigation;