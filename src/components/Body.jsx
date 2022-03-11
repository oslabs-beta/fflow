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

  const dragStart = (dragItem) => {
    if (dragItem.source.droppableId === 'canvas') document.getElementById(dragItem.draggableId).style.backgroundColor = '#d0f0fd';
  };

  const dragEnd = (dragItem) => {
    //update state with what's dragged onto canvas
    //if dragged from canvas
    if (dragItem.source.droppableId === 'canvas') document.getElementById(dragItem.draggableId).style.backgroundColor = 'inherit';

    if (!dragItem.destination) return;
    if (dragItem.source.droppableId === 'htmlTags' && dragItem.destination.droppableId === 'canvas') {
      // if dragged from tags to canvas
      // dispatch addComponent and refreshCode reducers
      dispatch(addComponent(dragItem));
      dispatch(refreshCode());
    } else if (dragItem.source.droppableId === 'canvas' && dragItem.destination.droppableId === 'canvas') {
      //if dragged to and from canvas (reordered)
      // dispatch reorderComponent and refreshCode reducers
      dispatch(reorderComponent(dragItem));
      dispatch(refreshCode());
    }
    // save code after any dragging
    dispatch(saveComponentCode());
  };

  return (
    <div className='bodyContainer'>
      <DragDropContext onDragStart={dragStart} onDragEnd={dragEnd}>
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
