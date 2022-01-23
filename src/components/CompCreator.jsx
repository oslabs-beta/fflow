import * as React from 'react';
import '../stylesheets/CompCreator.css';

const CompCreator = () => {
  return (
    <div id='comp-create-box'>
      <p id='create-react-component-header'>React Component</p>
      <form>
        <div id='create-react-component-inputs'>
          <input id='create-react-component-input-field' placeholder='Component Name...'></input>
          <span id='create-react-component-root-check'>
            <label name='root-check'>Root</label>
            <input type='checkbox' name="root-check"></input>
          </span>
        </div>

        <button id='create-react-component-button' type='submit'>Add</button>
        <button class="block text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" type="button" data-modal-toggle="popup-modal">
          ADD
        </button>

      </form>
    </div>
  )
}

export default CompCreator;

{/* <button class="block text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" type="button" data-modal-toggle="popup-modal">
Clear Canvas
</button> */}