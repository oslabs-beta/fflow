import React from 'react';
import '../stylesheets/Login.css';
import '../stylesheets/Navigation.css';

const Login = (props) => {
  return (
    <div id='login-component'>
      <div id='modal-overlay'>
        <form className='form-modal'>
          <h4>Sign into fl0w</h4>
          <div class='flex justify-end p-2'>
            <button
              id='close-login-form-modal'
              type='button'
              class='text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
              data-modal-toggle='authentication-modal'
            >
              <svg class='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>

          <div>
            <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300' id='login-email-label' htmlFor='email'>
              Email
            </label>
            <input
              id='login-email-input-field'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              className='form-input'
              type='text'
              name='email'
              placeholder='name@company.com'
            />
          </div>

          <div>
            <label class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300' id='login-password-label' htmlFor='password'>
              Password
            </label>
            <input id='login-password-input-field' className='form-input' type='password' name='password' placeholder='••••••••' />
          </div>

          <button
            type='submit'
            class='w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            id='login-submit-button'
          >
            Login
          </button>

          <div class='text-sm font-medium text-gray-500 dark:text-gray-300'>
            Not registered?{' '}
            <a href='#' class='text-blue-700 hover:underline dark:text-blue-500'>
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
