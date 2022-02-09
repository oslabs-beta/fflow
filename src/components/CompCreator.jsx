import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createComponent, refreshCode } from '../redux/canvasSlice';
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
          <input id='create-react-component-input-field' placeholder='Component Name'></input>
          {/* <label for='component' className='form-label'>
          Create Component
        </label> */}
          {/* <span id='create-react-component-root-check'>
            <label name='root-check'>Root</label>
            <input id='root-checkbox' type='checkbox' name='root-check'></input>
          </span> */}
          <button id='create-react-component-button' type='submit' onClick={(e) => onClick(e)}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompCreator;
