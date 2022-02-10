import * as React from 'react';
import '../stylesheets/TagCreator.css';

const TagCreator = () => {
  return (
    <div>
      <p id='html-tag-creator-container-header'>Custom HTML Elements</p>
      <form action='#' id='tag-create-form'>
        <input type='text' class='tag-name-input-field' placeholder='Tag Name' id='tag-name' name='tag-name' />

        <input type='text' class='tag-name-input-field' placeholder='Tag Class' id='tag-class-input-field' name='tag-class' />

        <input type='text' class='tag-name-input-field' placeholder='Tag Id' id='tag-id-input-field' name='tag-id' />
        <input type='submit' id='create-html-tag-submit-button' value='ADD' />
      </form>
    </div>
  );
};

export default TagCreator;
