import React from 'react';
import { useDispatch } from 'react-redux';
import { clearProject, refreshCode } from '../redux/canvasSlice';
import { changeTheme } from '../redux/themeSlice';
import '../stylesheets/Header.css';

const Header = () => {
  const dispatch = useDispatch();

  const themeToggle = () => {
    document.body.classList.toggle('theme-light');
    dispatch(changeTheme());
  };

  const clear = () => {
    if (confirm('Would you like to clear your project?')) {
      dispatch(clearProject());
    }
  };

  return (
    <div className='headerContainer'>
      {/* <!-- Modal toggle --> */}
      <button
        class='block text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
        type='button'
        data-modal-toggle='popup-modal'
        id='clear-canvas-button'
        onClick={clear}
      >
        Clear Project
      </button>

      {/* <!-- App Theme Toggle  --> */}
      <input type='checkbox' className='checkbox' id='checkbox' onChange={() => themeToggle()} />
      <label for='checkbox' className='label'>
        {/* <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i> */}
        <div className='ball'></div>
      </label>
    </div>
  );
};

export default Header;
