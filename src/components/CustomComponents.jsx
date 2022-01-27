import React from 'react';
import '../stylesheets/CustomComponents.css';
import { useSelector } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const CustomComponents = () => {
  const custom = useSelector((state) => state.canvas.customComponents);
  if (custom.length) {
    return (
      // <div id='custom-components-container'>
      //   {custom.map((ele) => {
      //     const id = ele.toLowerCase();
      //     return (
      //       <div className='custom-components' key={id}>
      //         {ele}
      //       </div>
      //     );
      //   })}
      <Droppable droppableId='customComponents'>
        {(providedDrop) => (
          <div id='custom-components-container' {...providedDrop.droppableProps} ref={providedDrop.innerRef}>
            {custom.map((ele, ind) => {
              const id = ele.toLowerCase();
              return (
                <Draggable className='custom-components' draggableId={id} index={ind}>
                  {(providedDrag, snapshot) => (
                    <div
                      className='custom-components'
                      key={id}
                      ind={ind}
                      ref={providedDrag.innerRef}
                      {...providedDrag.draggableProps}
                      {...providedDrag.dragHandleProps}
                    >
                      {ele}
                    </div>
                  )}
                </Draggable>
              );
            })}
            {providedDrop.placeholder}
          </div>
        )}
      </Droppable>
      // </div>
    );
  } else {
    return null;
  }
};

export default CustomComponents;
