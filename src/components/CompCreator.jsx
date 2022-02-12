import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createComponent, refreshCode, saveComponentCode } from '../redux/canvasSlice';
import '../stylesheets/CompCreator.css';

const CompCreator = () => {
  const dispatch = useDispatch();
  const custom = useSelector((state) => state.canvas.customComponents);
  const tags = useSelector((state) => state.canvas.tags);

  function onClick(e) {
    e.preventDefault();
    const input = document.getElementById('create-react-component-input-field');
    const text = input.value[0].toUpperCase() + input.value.slice(1);
    if (!custom.includes(text)) {
      dispatch(createComponent({ text }));
      dispatch(refreshCode());
      dispatch(saveComponentCode());
    } else {
      alert('Component with that name already exists');
    }
    input.value = '';
  }

  return (
    <div id='comp-create-box'>
      <form className='create-component-form'>
        <div id='create-react-component-inputs'>
          <div class='relative text-gray-700'>
            <input
              id='create-react-component-input-field'
              className='w-44 h-8 pl-3 pr-8 text-sm placeholder-gray-600 border rounded-lg focus:shadow-outline'
              type='text'
              placeholder='Component Name'
            />
            <button
              type='submit'
              data-testid='add-button'
              onClick={(e) => onClick(e)}
              className='absolute inset-y-0 right-0 flex items-center px-2 text-sm font-normal text-white bg-gradient-to-l from-violet-700 to-blue-500 rounded-r-md hover:bg-violet-400 focus:bg-violet-600'
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompCreator;
