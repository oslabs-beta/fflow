import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TreeFiles from './TreeFile';
import TreeRecursive from './TreeRecursive';

const StyledTree = styled.div`
  line-height: 1.5;
`;

const Tree = ({ data, children }) => {
  const isImparative = data && !children;

  return <StyledTree>{isImparative ? <TreeRecursive data={data} /> : children}</StyledTree>;
};

export default Tree;
