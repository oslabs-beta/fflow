import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import './stylesheets/App.css'
// import { hot } from 'react-hot-loader/root';
 
const App = () => {

    return (
    <div className='App'>
      {/* Hello React! */}
      <Header /> 
      <Body />
    </div>);
};
 
ReactDOM.render(<App />, document.getElementById('root'));