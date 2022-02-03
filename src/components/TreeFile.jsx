import React, { useState } from 'react';
// import AiOutlineFile from 'react-icons/ai';
import styled from 'styled-components';
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from 'react-icons/di';
import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { renderComponentCode, setCurrentFile, saveComponentCode } from '../redux/canvasSlice';

const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

const FILE_ICONS = {
  js: <DiJavascript1 />,
  css: <DiCss3Full />,
  html: <DiHtml5 />,
  jsx: <DiReact />,
};

const TreeFile = ({ name, code }) => {
  const ext = name.split('.')[1];
  const componentName = name.split('.')[0];
  const dispatch = useDispatch();

  let currentFile = useSelector((state) => state.canvas.currentFile);
  const currentCode = useSelector((state) => state.canvas.code);
  const files = useSelector((state) => state.canvas.files);

  const handleClick = () => {
    dispatch(saveComponentCode({ currentCode, currentFile }));
    console.log('files: ', files);
    dispatch(setCurrentFile(name));
    currentFile = name;
    dispatch(renderComponentCode({ currentFile, componentName }));
    console.log('filename clicked');
  };

  return (
    <StyledFile>
      {/* render the extension or fallback to generic file icon  */}
      {FILE_ICONS[ext]}
      <span onClick={() => handleClick()}>{name}</span>
    </StyledFile>
  );
};

export default TreeFile;
