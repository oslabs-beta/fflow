import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import Body from './components/Body';
import Navigation from './components/Navigation';
import './stylesheets/App.css';
import './stylesheets/index.css';
import '@themesberg/flowbite';
import { store } from './redux/store';
import { Provider, useDispatch } from 'react-redux';
import { loadPrevState } from './redux/canvasSlice'
import { loadState } from './localStorage'

const App = () => { 
  const dispatch = useDispatch()
  
  const checkForPrevState = async () => {
    const isPrev = await loadState()
    console.log(isPrev, "checkForPrevState")

    return isPrev ? isPrev : false
  }
  
  const prevState = checkForPrevState()
  prevState.then(data => console.log(data))
  console.log(prevState, "prevState in App")

  if(prevState){
    prevState.then(data => console.log(data))
    useEffect(() => {
      dispatch(loadPrevState(prevState))
    })
  }

  return (
    <div className='App'>
      <Navigation/>
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
