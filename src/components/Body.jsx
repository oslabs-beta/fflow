import * as React from 'react';
import DnD from './DnD';
import Canvas from './Canvas';
import Header from './Header';
import CodePreview from './CodePreview';
import '../stylesheets/BodyContainer.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addComponent, refreshCode, reorderComponent, saveComponentCode } from '../redux/canvasSlice';

const Body = () => {
  const dispatch = useDispatch();
  // to pull array of all components that were dragged on
  const components = useSelector((state) => state.canvas.components);

  function dragStart(dragItem) {
    if (dragItem.source.droppableId === 'canvas') {
      document.getElementById(dragItem.draggableId).style.backgroundColor = 'lightblue';
    }
  }

  function dragEnd(dragItem) {
    //update state with what's dragged onto canvas
    if (dragItem.source.droppableId === 'canvas') {
      //if dragged from canvas
      document.getElementById(dragItem.draggableId).style.backgroundColor = 'inherit';
    }
    if (!dragItem.destination) return;
    if (dragItem.source.droppableId === 'htmlTags' && dragItem.destination.droppableId === 'canvas') {
      //if dragged from tags to canvas
      dispatch(addComponent(dragItem));
      dispatch(refreshCode());
    } else if (dragItem.source.droppableId === 'canvas' && dragItem.destination.droppableId === 'canvas') {
      //if dragged to and from canvas
      dispatch(reorderComponent(dragItem));
      dispatch(refreshCode());
    }
    dispatch(saveComponentCode());
  }

  // const show = useSelector((state) => state.nav.showModal);

  return (
    <div className='bodyContainer'>
      <DragDropContext onDragEnd={dragEnd} onDragStart={dragStart}>
        <DnD />
        <Canvas components={components} />
      </DragDropContext>

      <div id='headerAndCodePreviewContainer'>
        <Header />
        <CodePreview />

      </div>
    </div>
  );
};

export default Body;
