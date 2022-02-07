import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import Body from './components/Body';
import Navigation from './components/Navigation';
import './stylesheets/App.css';
import './stylesheets/index.css';
import '@themesberg/flowbite';
import { store } from './redux/store';
import { Provider, useDispatch } from 'react-redux';
import { loadPrevState, refreshCode } from './redux/canvasSlice';
import { loadState } from './localStorage';

const App = () => {
  const dispatch = useDispatch();

  const checkForPrevState = async () => {
    const isPrev = await loadState();
    console.log(isPrev, 'checkForPrevState');
    return isPrev ? isPrev : 'load failed';
  };

  // const prevState = checkForPrevState()
  // prevState.then(data => console.log(data))
  // console.log(prevState, "prevState in App")

  // if(prevState){
  //   prevState.then(data => console.log(data))
  //   useEffect(() => {
  //     dispatch(loadPrevState(prevState))
  //   })
  // }

  useEffect(() => {
    console.log('useEffect ran');
    checkForPrevState().then((res) => {
      dispatch(loadPrevState(res));
      dispatch(refreshCode());
    });
  }, []);

  return (
    <div className='App'>
      <Navigation />
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
