import React from 'react';
import styled from 'styled-components';
import TreeRecursive from './TreeRecursive';

const StyledTree = styled.div`
  line-height: 1.6;
`;

const Tree = ({ data, children }) => {
  console.log(children, 'children');
  const isImparative = data && !children;
  console.log('isImparative', isImparative);

  return <StyledTree>{isImparative ? <TreeRecursive data={data} /> : children}</StyledTree>;
};

export default Tree;
