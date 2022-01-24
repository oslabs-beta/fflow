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
import { addComponent, reorderComponent } from '../redux/canvasSlice';

const Body = () => {
  const dispatch = useDispatch();
  // to pull array of all components that were dragged on
  const components = useSelector((state) => state.canvas.components);

  function dragEnd(dragItem) {
    //update state with what's dragged onto canvas
    if (dragItem.source.droppableId === 'htmlTags' && dragItem.destination.droppableId === 'canvas') {
      dispatch(addComponent(dragItem));
      
    }else if(dragItem.source.droppableId === 'canvas' && dragItem.destination.droppableId === 'canvas'){
      dispatch(reorderComponent(dragItem));
    }
    console.log('dragItem is: ', dragItem);
    console.log('components is: ', components);
  }

  return (
    <div className='bodyContainer'>
      <Navigation />
      <Header />
      <DragDropContext onDragEnd={dragEnd}>
        <DnD />
        <Canvas components={components} />
      </DragDropContext>
      <CodePreview />
    </div>
  );
};

export default Body;
