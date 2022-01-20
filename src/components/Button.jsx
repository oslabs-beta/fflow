import * as React from 'react';
import '../stylesheets/Button.css';

const Button = () => {
  return (
    <div id='button-container'>
    <br/>
    <p>HTML Elements</p>
        <button id='div-component'>Div</button>
        <button id='paragraph-component'>Paragraph</button>
        <button id='anchor-component'>Anchor</button>
        <button id='image-component'>Image</button>
        <button id='unordered-list-component'>Unordered List</button>
        <button id='form-component'>Form</button>
        <button id='ordered-list-component'>Ordered List</button>
        <button id='button-component'>Button</button>
        <button id='list-item-component'>List Item</button>
        <button id='span-component'>Span</button>
        <button id='header-1-component'>Header 1</button>
        <button id='heard-2-component'>Header 2</button>
      </div>
  )
}

export default Button;