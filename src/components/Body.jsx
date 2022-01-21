import * as React from 'react';
import Navigation from './Navigation';
import DnD from './DnD';
import Canvas from './Canvas';
import Header from './Header';
import CodePreview from './CodePreview';
import '../stylesheets/BodyContainer.css';

const Body = () => {
  return (
    <div className="bodyContainer">
      <Navigation />
      <Header />
      <DnD />
      <Canvas />
      <CodePreview />
    </div>
  )
}

export default Body;