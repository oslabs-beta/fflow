import * as React from 'react';
import Navigation from './Navigation';
import DnD from './DnD';
import Canvas from './Canvas';
import Header from './Header';
import CodePreview from './CodePreview';
import '../stylesheets/BodyContainer.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addComponent } from '../redux/canvasSlice';

const Body = () => {
  const dispatch = useDispatch();
  // to pull array of all components that were dragged on
  const components = useSelector(state => state.canvas.components);

  function dragEnd(dragItem) {
    //update state with what's dragged onto canvas
    if(dragItem.destination.droppableId === 'canvas' && dragItem.source.droppableId === 'htmlTags'){
      console.log('droppableId is: ', dragItem.destination.droppableId);
      dispatch(addComponent(dragItem.draggableId));
    }
    console.log('dragItem is: ', dragItem);
  }

  return (
    <div className='bodyContainer'>
      <Navigation />
      <Header />
      <DragDropContext onDragEnd={dragEnd}>
        <DnD />
      <Canvas components={components}/>
      </DragDropContext>
      <CodePreview />
    </div>
  );
};

export default Body;
