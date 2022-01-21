import * as React from 'react';
import '../stylesheets/CompCreator.css';

const CompCreator = () => {
  return (
    <div id='comp-create-box'>
      <p id='create-react-component-header'>Add a React Component</p>
      <form>
        <div id='inputs'>
          <input id='text-field' placeholder='Component Name...'></input>
          <span id='root-check'>
            <label name='check'>Root</label>
            <input type='checkbox' name="check"></input>
          </span>
        </div>
        <button id='add-react-component-button' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default CompCreator;