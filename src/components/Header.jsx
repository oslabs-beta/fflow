import React from 'react';
import { useDispatch } from 'react-redux';
import { clearComponents } from '../redux/canvasSlice';
import { changeTheme } from '../redux/themeSlice';
import '../stylesheets/Header.css';

const Header = () => {
  const dispatch = useDispatch();

  const themeToggle = () =>{
    document.body.classList.toggle('theme-light');
    dispatch(changeTheme());
  }
  // link this classList toggle to VS code theme
  // if classList includes 'theme-light' set theme state to 'vs-light'
  
  const clear = () => {
    if(confirm('Would you like to clear canvas?')){
      dispatch(clearComponents());
    }
  }

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
        Clear Canvas
      </button>

      <input type='checkbox' className='checkbox' id='checkbox' onChange={() => themeToggle()} />
      <label for='checkbox' className='label'>
        {/* <i className="fas fa-moon"></i>
        <i className='fas fa-sun'></i> */}
        <div className='ball'></div>
      </label>

      {/* <!-- Delete HTML or React Component Modal --> */}
      <div
        class='hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full'
        id='popup-modal'
      >
        <div class='relative px-4 w-full max-w-md h-full md:h-auto'>
          {/* <!-- Modal content --> */}
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            {/* <!-- Modal header --> */}
            <div class='flex justify-end p-2'>
              <button
                type='button'
                class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
                data-modal-toggle='popup-modal'
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

            {/* <!-- Modal body --> */}
            <div class='p-6 pt-0 text-center'>
              <svg
                class='mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
              </svg>
              <h3 class='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>Are you sure you want to delete this item?</h3>
              <button
                data-modal-toggle='popup-modal'
                type='button'
                class='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
              >
                Yes, I'm sure
              </button>
              <button
                data-modal-toggle='popup-modal'
                type='button'
                class='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600'
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
