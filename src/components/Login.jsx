import React from 'react';
import '../stylesheets/Login.css'
import '../stylesheets/Navigation.css';

const Login = () => {

  // if (!props.showFormModal) return null;

  return (
  <div id='login-component'>
     <div id='modal-overlay'>
        <form className='form-modal'>
        <button id='close-button'>
            <i class='fa fa-window-close-o fa-xs'></i>
          </button>
          <div>
            <label htmlFor="username">USERNAME</label>
            <input className="form-input" type="text" name="username" placeholder="Enter your username"/>
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input className="form-input" type="password" name="password" placeholder="Enter your password"/>
          </div>
          <div id='button-container'>
            <button id="signup-button" className="form-button">Sign Up</button>
            <button id="login-button" className="form-button">Login</button>
          </div>
        </form>
      </div>


  </div>
  )
};

export default Login;
