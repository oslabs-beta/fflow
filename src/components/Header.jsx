import React from 'react';
import { useDispatch } from 'react-redux';
import { clearProject } from '../redux/canvasSlice';
import { changeTheme } from '../redux/themeSlice';
import '../stylesheets/Header.css';
import { IconContext } from 'react-icons';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const dispatch = useDispatch();

  const themeToggle = () => {
    document.body.classList.toggle('theme-light');
    dispatch(changeTheme());
  };

  const clear = () => {
    if (confirm('Are you sure you want to clear project?')) {
      dispatch(clearProject());
    }
  };

  return (
    <div className='headerContainer'>
      <button
        class='block text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
        type='button'
        data-modal-toggle='popup-modal'
        id='clear-canvas-button'
        data-testid='clear-project-button'
        onClick={clear}
      >
        Clear Project
      </button>
      <input type='checkbox' className='checkbox' id='checkbox' data-testid='toggle-theme-btn' onChange={() => themeToggle()} />
      <label htmlFor='checkbox' className='label'>
        <IconContext.Provider value={{ color: '#FFD523', size: '12px' }}>
          <div>
            <FaSun />
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: 'var(--lightBlueBackgroundColor)', size: '12px' }}>
          <div>
            <FaMoon />
          </div>
        </IconContext.Provider>

        <div className='ball'></div>
      </label>
    </div>
  );
};

export default Header;
