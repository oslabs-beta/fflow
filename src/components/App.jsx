import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Body from './Body';
import '../stylesheets/App.css';
import 'regenerator-runtime/runtime';
import { useDispatch } from 'react-redux';

// local storage to be added in next release
import { loadState } from '../localStorage';
import { refreshCode } from '../redux/canvasSlice';

const App = () => {
  const dispatch = useDispatch();

  const checkForPrevState = async () => {
    const isPrev = await loadState();

    return isPrev ? isPrev : null;
  };

  useEffect(() => {
    checkForPrevState().then((res) => {
      if (res) {
        dispatch(loadPrevState(res));
        dispatch(refreshCode());
      }
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
