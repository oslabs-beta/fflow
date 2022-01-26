import * as React from 'react';
import '../stylesheets/CompCreator.css';

const CompCreator = () => {
  return (
    <div id='comp-create-box'>
      <p id='create-react-component-header'>React Component</p>
      <form>
        <div id='create-react-component-inputs'>
          <input id='create-react-component-input-field' placeholder='Component Name'></input>

          <span id='create-react-component-root-check'>
            <label name='root-check'>Root</label>
            <input className='root-checkbox' type='checkbox' name="root-check"></input>
          </span>
          
        </div>

        <button id='create-react-component-button' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default CompCreator;
