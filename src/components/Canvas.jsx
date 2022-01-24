import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { textSpanOverlap } from 'typescript';
import '../stylesheets/Canvas.css';
import CanvasItem from './CanvasItem';
import { Draggable } from 'react-beautiful-dnd';

const Canvas = (props) => {
  
  return (
    <Droppable droppableId='canvas'>
      {(provided) => (
        <div className='canvas' {...provided.droppableProps} ref={provided.innerRef}>
        {/* {props.components} */}
          <p id='canvas-instruction'>
            Drag & Drop <br /> HTML elements here
          </p>
         
          {props.components.map((ele, ind) => {
            return (
              <Draggable key={ind} draggableId={'' + ind + ele} index={ind}>
                {(provided, snapshot) => (
                  <CanvasItem name={ele} ind={ind} provided={provided} isDragging={snapshot.isDragging}/>
                )}
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
