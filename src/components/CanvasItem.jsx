import React from 'react';
import DeleteCanvasItem from './DeleteCanvasItem';
import '../stylesheets/Canvas.css';
import { useDispatch, useSelector } from 'react-redux';
import { renderComponentCode, saveComponentCode, setCurrentFile } from '../redux/canvasSlice';

const CanvasItem = (props) => {
  const dispatch = useDispatch();
  const custom = useSelector((state) => state.canvas.customComponents);

  function onClick(e) {
    const name = e.target.innerText + '.jsx';
    // dispatch(saveComponentCode({ currentCode, currentFile }));
    if (custom.includes(e.target.innerText)) {
      dispatch(saveComponentCode());
      dispatch(setCurrentFile(name));
      dispatch(renderComponentCode({ name }));
    }
  }

  return (
    <div className='container mx-auto px-2 md:px-2 my-4 md:mb-2'>
      <div
        // id='canvas-item'
        className='flex-auto items-center justify-around md:p-4 shadow-md rounded-lg relative'
        ref={props.provided.innerRef}
        {...props.provided.draggableProps}
        {...props.provided.dragHandleProps}
        id={props.ind + '-' + props.name}
        onClick={onClick}
      >
        <div className='text-center max-w-7xl'>
          <p key={props.ind} id='canvas-item-label'>
            {props.name}
          </p>
        </div>

        <div className='flex justify-center items-center absolute top-0 right-0 col-span-1'>
          <DeleteCanvasItem index={props.ind} name={props.name} />
        </div>
      </div>
    </div>
  );
};

export default CanvasItem;
