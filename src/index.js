import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './stylesheets/App.css';
import './stylesheets/index.css';
import '@themesberg/flowbite';

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');

root.id = 'root';
document.body.appendChild(root);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
