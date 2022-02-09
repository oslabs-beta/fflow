import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createComponent, refreshCode } from '../redux/canvasSlice';
import '../stylesheets/CompCreator.css';

const CompCreator = () => {
  const dispatch = useDispatch();
  const custom = useSelector((state) => state.canvas.customComponents);

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
      <form className='create-component-form'>
        <div id='create-react-component-inputs'>
          <input id='create-react-component-input-field' placeholder='Component Name'></input>
          <button id='create-react-component-button' data-testid='add-button' type='submit' onClick={(e) => onClick(e)}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompCreator;
