import React from 'react';
import Navigation from './Navigation';
import Body from './Body';
import '../stylesheets/App.css';

// WIP to fix monaco-editor not displaying in dev mode
// delete window.require;
// delete window.exports;
// delete window.module;

const App = () => {
  return (
    <div className='App' data-testid='app'>
      <Navigation />
      <Body />
    </div>
  );
};

export default App;
