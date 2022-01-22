import React from "react";
import DeleteCanvasItem from './DeleteCanvasItem';

const CanvasItem = ({ canvasItem, deleteCanvasItem }) => {
  
  return (
      <div className="container mx-auto px-2 md:px-4 mb-8 md:mb-4">
        <div className="flex items-center justify-around p-2 md:p-4 shadow-md rounded-lg relative">
          <div className="w-1/3 text-center">
            {/* <h3>{canvasItem.name}</h3> */}
          </div>

          <div
            className="absolute top-0 right-0 col-span-1"
            
            // onClick={(e) => {
            //   e.preventDefault();
            //   deleteCoin(canvasItem.id);
            // }}
          >
            <DeleteCanvasItem />
          </div>
        </div>
      </div>
 
  );
};

export default CanvasItem;