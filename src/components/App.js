import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Body from './Body';
import '../stylesheets/App.css';
import 'regenerator-runtime/runtime';
import { useDispatch } from 'react-redux';
import { loadPrevState, refreshCode } from '../redux/canvasSlice';
import { loadState } from '../localStorage';

const App = () => {
  const dispatch = useDispatch();

  const checkForPrevState = async () => {
    const isPrev = await loadState();
    console.log(isPrev, 'checkForPrevState');
    return isPrev ? isPrev : 'load failed';
  };

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

export default App;
