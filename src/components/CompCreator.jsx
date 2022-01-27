import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createComponent, refreshCode } from '../redux/canvasSlice';
import '../stylesheets/CompCreator.css';
import CustomComponents from './CustomComponents';

const CompCreator = () => {
  const dispatch = useDispatch();
  const custom = useSelector((state) => state.canvas.customComponents);
  const tags = useSelector((state) => state.canvas.tags);

  function onClick(e) {
    e.preventDefault();
    const input = document.getElementById('create-react-component-input-field');
    const check = document.getElementById('root-checkbox');
    const text = input.value[0].toUpperCase() + input.value.slice(1);
    console.log(custom);
    if (!custom.includes(text)) {
      dispatch(createComponent({ text, check }));
      dispatch(refreshCode());
    } else {
      alert('Component with that name already exists');
    }
    text.value = '';
    check.checked = false;
  }

  return (
    <div id='comp-create-box'>
      <p id='create-react-component-header'>React Component</p>
      <form>
        <div id='create-react-component-inputs'>
          <input id='create-react-component-input-field' placeholder='Component Name'></input>

          <span id='create-react-component-root-check'>
            <label name='root-check'>Root</label>
            <input id='root-checkbox' type='checkbox' name='root-check'></input>
          </span>
        </div>

        <button id='create-react-component-button' type='submit' onClick={(e) => onClick(e)}>
          Add
        </button>
      </form>
      <CustomComponents />
    </div>
  );
};

export default CompCreator;
