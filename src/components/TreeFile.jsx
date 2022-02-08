import React from 'react';
import styled from 'styled-components';
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from 'react-icons/di';
import { useSelector, useDispatch } from 'react-redux';
import { renderComponentCode, setCurrentFile, saveComponentCode, refreshCode } from '../redux/canvasSlice';

const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  },
  color: blue;
  width: 250px;
`;

const FILE_ICONS = {
  js: (
    <span className='nested-files' style={{ backgroundColor: 'var(--javascript-icon-background-color)', color: 'var(--javascript-icon-color' }}>
      <DiJavascript1 />
    </span>
  ),
  css: (
    <span className='nested-files' style={{ color: '##264de4' }}>
      <DiCss3Full />
    </span>
  ),
  html: (
    <span className='nested-files' style={{ color: '#E34C26' }}>
      <DiHtml5 />
    </span>
  ),
  jsx: (
    <span className='nested-files' style={{ color: '#61DBFB' }}>
      <DiReact />
    </span>
  ),
};

const TreeFile = ({ name, code }) => {
  const ext = name.split('.')[1];

  const dispatch = useDispatch();

  let currentFile = useSelector((state) => state.canvas.currentFile);

  const handleClick = () => {
    console.log('filename is: ', name);
    dispatch(saveComponentCode());

    currentFile = name;
    dispatch(renderComponentCode({ name }));
  };

  return (
    <StyledFile data-testid='file' className='nested-files'>
      {/* render the extension or fallback to generic file icon  */}
      {FILE_ICONS[ext]}
      <span onClick={() => handleClick()}>{name}</span>
    </StyledFile>
  );
};

export default TreeFile;
