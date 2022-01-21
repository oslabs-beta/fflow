import * as React from 'react';
import '../stylesheets/DragList.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DragList = () => {
  const items = {
    divTag: 'Div',
    pTag: 'Paragraph',
    aTag: 'Anchor',
    imgTag: 'Image',
    ulTag: 'Unordered List',
    formTag: 'Form',
    olTag: 'Ordered List',
    buttonTag: 'Button',
    liTag: 'List Item',
    spanTag: 'Span',
    h1Tag: 'Header 1',
    h2Tag: 'Header 2',
  }
  // const tags = [];
  const [tags, updateTags] = React.useState([])
  let count = 0;

  for(const id in items){
    const label = items[id];
    tags.push(
      <Draggable key={count} draggableId={id} index={count++}>
        {(provided) => (
          <div
            className='dragItems'
            id={id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <p>{label}</p>
          </div>
        )}
      </Draggable>
    )
  }

  return (
    <DragDropContext>
      <Droppable droppableId='htmlTags'>
        {(provided) => (
          <div id='button-container' {...provided.droppableProps} ref={provided.innerRef}>
            {tags}
            {/* {provided.placeholder} */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DragList;