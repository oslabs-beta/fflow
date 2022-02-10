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
      {/* <p id='create-react-component-header'>React Component</p> */}
      <form className='create-component-form'>
        <div id='create-react-component-inputs'>
          {/* <input id='create-react-component-input-field' placeholder='Component Name'></input> */}

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
            {/* <button
              type='submit'
              data-testid='add-button'
              onClick={(e) => onClick(e)}
              className='absolute inset-y-0 right-0 flex items-center px-2 font-medium text-white bg-gradient-to-b from-violet-700 to-cyan-400 bg-violet-700 rounded-r-md hover:bg-violet-400 focus:bg-violet-600'
            >
              Add
            </button> */}
          </div>

          {/* <label for='component' className='form-label'>
          Create Component
        </label> */}
          {/* <span id='create-react-component-root-check'>
            <label name='root-check'>Root</label>
            <input id='root-checkbox' type='checkbox' name='root-check'></input>
          </span> */}
          {/* <button id='create-react-component-button' data-testid='add-button' type='submit' onClick={(e) => onClick(e)}>
            Add
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default CompCreator;
