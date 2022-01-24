import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Body from './components/Body';
import './stylesheets/App.css';
import './stylesheets/index.css';
import '@themesberg/flowbite';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// import { hot } from 'react-hot-loader/root';

const App = () => {  
    return (
    <div className='App'>
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
