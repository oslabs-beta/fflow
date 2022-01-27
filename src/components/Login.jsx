import React from 'react';
import '../stylesheets/Login.css';
import '../stylesheets/Navigation.css';

const Login = (props) => {
  //console.log(props);
  // if (!props.showFormModal) return null;

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   console.log('clicked handleClick');
  // };

  return (
    <div id='login-component'>
      <div id='modal-overlay'>
        <form className='form-modal'>
          <div>
            <button id='close-button' type='button' onClick={props.handleClose}>
              <i className='fa fa-window-close-o fa-xs'></i>
            </button>
          </div>
          <div>
            <label htmlFor='username'>USERNAME</label>
            <input className='form-input' type='text' name='username' placeholder='Enter your username' />
          </div>
          <div>
            <label htmlFor='password'>PASSWORD</label>
            <input className='form-input' type='password' name='password' placeholder='Enter your password' />
          </div>
          <div id='button-container'>
            <button id='signup-button' className='form-button'>
              Sign Up
            </button>
            <button id='login-button' className='form-button'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// const handleSignup = (e) => {
//   e.preventDefault();
//   const username = e.target.username.value;
//   const password = e.target.password.value;
//   fetch('http://localhost:8080/signup', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       username: username,
//       password: password,
//     }),
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// const handleLogin = () => {
//   e.preventDefault();
//   const username = e.target.username.value;
//   const password = e.target.password.value;
//   fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       username: username,
//       password: password,
//     }),
//   })
//     .then((res) => res.json())
//     .catch((err) => {
//       console.log(err);
//     });
// };
