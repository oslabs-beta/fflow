import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
// import Navigation from './components/Navigation';
import './stylesheets/App.css';
import './stylesheets/index.css';
// import { hot } from 'react-hot-loader/root';
import '@themesberg/flowbite';

const App = () => {
  return (
    <div className='App'>
      <Body />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
