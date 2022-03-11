import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Body from './Body';
import '../stylesheets/App.css';
import 'regenerator-runtime/runtime';
import { useDispatch } from 'react-redux';
import { loadPrevState, refreshCode } from '../redux/canvasSlice';
import { loadState } from '../localforage';
import localforage from 'localforage';

const App = () => {
  const dispatch = useDispatch();

  const checkForPrevState = async () => {
    const isPrev = await loadState();
    return isPrev ? isPrev : null;
  };

  // following useEffect runs on first mount
  useEffect(() => {
    checkForPrevState().then((res) => {
      console.log('isPrev fired');
      console.log('prevousProject: ', res);
      // if saved project exists, use dispatch to load previous state
      // issue: thread of execution never enters this conditional statement
      if (res) {
        dispatch(loadPrevState(res));
        dispatch(refreshCode());
        console.log('save exists and LoadPrevState and refresh Code fired');
      } else {
        console.log('No saved project found in localforage, setting initial state blank');
      }
    });
  }, []);

  // useEffect(() => {
  //   localforage.setItem('state', state);
  //   console.log('localforage.setItem ran');
  // }, [state]);

  return (
    <div className='App'>
      <Navigation />
      <Body />
    </div>
  );
};

export default App;
