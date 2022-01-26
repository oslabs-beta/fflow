import * as React from 'react';
import '../stylesheets/TagCreator.css';

const TagCreator = () => {
  return (
    <div>
      <p id='html-tag-creator-container-header'>Custom HTML Elements</p>
      <form action='#' id="tag-create-form">
          <label for="tag-name" class='tag-name-labels'>Tag Name</label>
          <input type="text" class='tag-name-input-field' placeholder="Tag Name" id="tag-name" name="tag-name" />
          <label for="tag-class" class='tag-name-labels' >Tag Class</label>
          <input type="text" class='tag-name-input-field' placeholder="Tag Class"id="tag-class-input-field" name="tag-class" />
          <label for="tag-name" class='tag-name-labels'>Tag ID</label>
          <input type="text" class='tag-name-input-field' placeholder="Tag Id" id="tag-id-input-field" name="tag-id"/>
          <input type="submit" id="create-html-tag-submit-button" value="ADD"/>
      </form>
    </div>
  )
}

export default TagCreator;

