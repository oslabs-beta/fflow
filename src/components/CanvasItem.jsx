import React from 'react';
import DeleteCanvasItem from './DeleteCanvasItem';

const CanvasItem = (props) => {
  return (
    <div className='container mx-auto px-2 md:px-4 my-4 md:mb-4'>
      <div
        className='flex-auto items-center justify-around p-2 md:p-4 shadow-md rounded-lg relative'
        ref={props.provided.innerRef}
        {...props.provided.draggableProps}
        {...props.provided.dragHandleProps}
      >
        <div className='w-1/3 text-center max-w-7xl'>
          <p key={props.ind}>{props.name}</p>
        </div>

        <div className='flex justify-center items-center absolute top-0 right-0 col-span-1'>
          <DeleteCanvasItem index={props.ind} name={props.name}/>
        </div>
      </div>
    </div>
  );
};

export default CanvasItem;
