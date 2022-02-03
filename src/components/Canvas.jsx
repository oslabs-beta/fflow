import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { textSpanOverlap } from 'typescript';
import '../stylesheets/Canvas.css';
import CanvasItem from './CanvasItem';
import { Draggable } from 'react-beautiful-dnd'

const Canvas = (props) => {
  // function createItem(ele, ind, provided, snapshot){
  //   console.log('components: ', props.components);
  //   if(Array.isArray(ele)){
  //     return(
  //       <Draggable key={ind + '-' + ele[0]} draggableId={ind + '-' + ele[0]} index={ind} >
  //         {(prov, snap) => (
  //           ele.map((curr, index) => {
  //             const newIndex = ind + '-' + index
  //             return(
  //               <div ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps} id={newIndex + '-' + ele}>
  //                 {createItem(curr, newIndex, prov, snap)}
  //               </div>
  //             )
  //           })
  //         )}
  //       </Draggable>
  //     )
  //   }else{
  //     console.log('else ran')
  //     return (
  //       // <Draggable key={ind} draggableId={ind + '-' + ele} index={ind}>
  //       //   {(provided, snapshot) => (
  //           <CanvasItem name={ele} ind={ind} provided={provided} isDragging={snapshot.isDragging}/>
  //       //   )}
  //       // </Draggable>
  //     )
  //   }
  // }
  
  return (
    <Droppable droppableId='canvas'>
      {(provided) => (
        <div className='canvas' {...provided.droppableProps} ref={provided.innerRef}>
     
          <p id='canvas-instruction'>
            Drag & Drop <br /> HTML elements here
          </p>
         
          {props.components.map((ele, ind) => {
              return (
                // <Draggable key={ind} draggableId={ind + '-' + ele} index={ind}>
                //   {(providedDrag, snapshotDrag) => (
                //     createItem(ele,ind, providedDrag, snapshotDrag)
                //   )}
                // </Draggable>
                <Draggable key={ind} draggableId={ind + '-' + ele} index={ind}>
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
