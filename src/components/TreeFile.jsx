import React from 'react';
import styled from 'styled-components';
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from 'react-icons/di';
import { useSelector, useDispatch } from 'react-redux';
import { renderComponentCode, saveComponentCode } from '../redux/canvasSlice';

const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  width: 250px;
  ${'' /* font-size: 15px; */}
`;

const FILE_ICONS = {
  js: (
    <span
      className='nested-files'
      style={{ backgroundColor: 'var(--javascript-icon-background-color)', color: 'var(--javascript-icon-color', height: '1em', width: '1em' }}
    >
      <DiJavascript1 />
    </span>
  ),
  css: (
    <span className='nested-files' style={{ backgroundColor: 'var(--css-icon-background-color)', color: 'var(--css-icon-color', height: '1em', width: '1em' }}>
      <DiCss3Full />
    </span>
  ),
  html: (
    <span className='nested-files' style={{ color: '#E34C26', height: '1em', width: '1em' }}>
      <DiHtml5 />
    </span>
  ),
  jsx: (
    <span
      className='nested-files'
      style={{ backgroundColor: 'var(--react-icon-background-color)', color: '#61DBFB', borderRadius: '50%', height: '1em', width: '1em' }}
    >
      <DiReact />
    </span>
  ),
};

const TreeFile = ({ name, code }) => {
  const ext = name.split('.')[1];

  const dispatch = useDispatch();

  let currentFile = useSelector((state) => state.canvas.currentFile);

  const handleClick = () => {
    if (ext != 'css') {
      dispatch(saveComponentCode());

      currentFile = name;
      dispatch(renderComponentCode({ name }));
    }
  };

  return (
    <StyledFile data-testid='file' className='nested-files'>
      {/* render the extension or fallback to generic file icon  */}
      {FILE_ICONS[ext]}
      <span style={{ marginLeft: '0.5em' }} onClick={() => handleClick()}>
        {name}
      </span>
    </StyledFile>
  );
};

export default TreeFile;
