import * as React from 'react';
import DnD from './DnD';
import Canvas from './Canvas';
import Customization from './Customization';
import CodePreview from './CodePreview';
import '../stylesheets/BodyContainer.css';

const Body = () => {
  return (
    <div className="bodyContainer">
      {/* I AM THE BODY */}
      <DnD />
      <Canvas />
      <Customization />
      <CodePreview />
    </div>
  )
}

export default Body;