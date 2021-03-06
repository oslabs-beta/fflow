import React from "react";
import { useDispatch } from "react-redux";
import { deleteComponent, refreshCode } from "../redux/canvasSlice";

const DeleteCanvasItem = (props) => {
  const dispatch = useDispatch();
  return (
    <svg
      className="fill-current text-gray-500 hover:text-indigo-600 inline-block h-4 w-4 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      onClick={(e) => {
        e.preventDefault();
        dispatch(deleteComponent(props));
        dispatch(refreshCode());
      }}
    >
      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z" />
    </svg>
  );
};

export default DeleteCanvasItem;