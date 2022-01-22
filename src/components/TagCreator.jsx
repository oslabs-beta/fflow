import * as React from 'react';
import '../stylesheets/TagCreator.css';

const TagCreator = () => {
  return (
    <div>
      <label id="header">Custom HTML Element</label>
      <div id="tag-create-box">
        <div className='tag-duo'>
          <label className="tag-label">Tag</label>
          <input className="tag-input"></input>
        </div>
        <div className='tag-duo' >
          <label className="tag-label">Class</label>
          <input className="tag-input"></input>
        </div>
        <div className='tag-duo'>
          <label className="tag-label">Id</label>
          <input className="tag-input"></input>
        </div>
        {/* <button id="add-element-btn">Add</button> */}
        <button class="block text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" type="button" data-modal-toggle="popup-modal">
          ADD
        </button>
      </div>
    </div>
  )
}

export default TagCreator;