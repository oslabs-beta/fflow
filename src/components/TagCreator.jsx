import * as React from 'react';
import '../stylesheets/TagCreator.css';

const TagCreator = () => {
  return (
    <div>
      <p id='html-tag-creator-container-header'>Custom HTML Elements</p>
      <form action='#' id="tag-create-form">
          <label for="tag-name" class='tag-name-labels' placeholder="Tag Name">Tag Name</label>
          <input type="text" class='tag-name-input-field' id="tag-name" name="tag-name" />
          <label for="tag-class" class='tag-name-labels' placeholder="Tag Class">Tag Class</label>
          <input type="text" class='tag-name-input-field' id="tag-class-input-field" name="tag-class" />
          <label for="tag-name" class='tag-name-labels' placeholder="Tag Id">Tag ID</label>
          <input type="text" class='tag-name-input-field' id="tag-id-input-field" name="tag-id"/>
          <input type="submit" id="create-html-tag-submit-button" value="ADD"/>
      </form>
    </div>
   

  )
}

export default TagCreator;

