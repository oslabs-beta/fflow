import * as React from 'react';
import '../stylesheets/TagCreator.css';

const TagCreator = () => {
  return (
    <div>
      <label id="header">HTML Elements</label>
      <div id="tag-create-box">
        <div className='tag-duo'>
          <label className="tag-label">Tag:</label>
          <input className="tag-input"></input>
        </div>
        <div className='tag-duo' >
          <label className="tag-label">Class:</label>
          <input className="tag-input"></input>
        </div>
        <div className='tag-duo'>
          <label className="tag-label">Id:</label>
          <input className="tag-input"></input>
        </div>
        <button id="add-element-btn">Add Element</button>
      </div>
    </div>
  )
}

export default TagCreator;