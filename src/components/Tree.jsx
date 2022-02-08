import React from 'react';
import styled from 'styled-components';
import TreeRecursive from './TreeRecursive';

const StyledTree = styled.div`
  line-height: 1.6;
`;

const Tree = ({ data, children }) => {
  const isImparative = data && !children;

  return <StyledTree>{isImparative ? <TreeRecursive data={data} /> : children}</StyledTree>;
};

export default Tree;
