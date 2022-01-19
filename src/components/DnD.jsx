import * as React from 'react';
import '../stylesheets/DnD.css';

const DnD = () => {
  return (
    <div className="dndContainer">
      Drag & Drop
      <br/>
      <br/>
      <div id='drag-and-drop-components'>
        <button id='div-component'>Div</button>
        <button id='paragraph-component'>Primary</button>
        <button id='image-component'>Image</button>
        <button id='unordered-list-component'>Unordered List</button>
        <button id='ordered-list-component'>Ordered List</button>
    </div>
    </div>
  )
}

export default DnD;