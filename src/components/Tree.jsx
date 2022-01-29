import * as React from 'react';
import { useSelector } from 'react-redux';
import TreeFiles from './TreeFiles';

const StyledTree = styled.div`
  line-height: 1.5;
`;

const Tree = ({ children }) => {
  return <StyledTree>{children}</StyledTree>;
};

export default Tree;
