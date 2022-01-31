import React, { useState } from 'react';
import AiOutlineFile from 'react-icons/ai';
import styled from 'styled-components';
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from 'react-icons/di';

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

const TreeFile = ({ name }) => {
  let ext = name.split('.')[1];

  return (
    <StyledFile>
      {/* render the extension or fallback to generic file icon  */}
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span>
    </StyledFile>
  );
};

export default TreeFile;
