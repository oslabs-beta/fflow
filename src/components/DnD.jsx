import * as React from 'react';
import '../stylesheets/DnD.css';
import CompCreator from './compCreator';
import TagCreator from './TagCreator';
import Button from './Button';

const DnD = () => {
  return (
    <div className="dndContainer">
      Drag & Drop
      <CompCreator />
      <TagCreator />
      <Button />
    </div>
  )
}

export default DnD;