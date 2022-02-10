import * as React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import '../stylesheets/Canvas.css';
import CanvasItem from './CanvasItem';

const Canvas = (props) => {
  const fileName = useSelector((state) => state.canvas.currentFile);

  return (
    <Droppable droppableId='canvas'>
      {(provided) => (
        <div className='canvas' {...provided.droppableProps} ref={provided.innerRef}>
          <p id='canvas-instruction'>
            Add elements into
            <br />
            <span id='current-canvas-file-name'>{fileName}</span>
          </p>

          {props.components.map((ele, ind) => {
            return (
              <Draggable key={ind} draggableId={ind + '-' + ele} index={ind}>
                {(provided, snapshot) => <CanvasItem name={ele} ind={ind} provided={provided} isDragging={snapshot.isDragging} />}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Canvas;
