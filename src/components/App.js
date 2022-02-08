import React from 'react';
import Navigation from './Navigation';
import Body from './Body';
import '../stylesheets/App.css';

const App = () => {
  return (
    <div className='App' data-testid='app'>
      <Navigation />
      <Body />
    </div>
  );
};

export default App;
