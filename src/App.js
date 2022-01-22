import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import './stylesheets/App.css';
import './stylesheets/index.css';
// import { hot } from 'react-hot-loader/root';
import '@themesberg/flowbite';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <div className='App'>
      {/* Hello React! */}
      <Body />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
