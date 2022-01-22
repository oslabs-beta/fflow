import * as React from "react";
import '../stylesheets/Canvas.css';
import CanvasItem from './CanvasItem';

const Canvas = () => {
  return (
    <div className="canvas">
    <p id='canvas-instruction'>Drag & Drop <br/> HTML elements here</p>

    <CanvasItem />
    </div> 
    
  )
}

export default Canvas;