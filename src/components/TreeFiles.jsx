import * as React from 'react';
import { useSelector } from 'react-redux';
import Tree from './Tree';
import { AiOutlineFile } from 'react-icons/ai';

const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

const TreeFiles = () => {
  const fileName = useSelector((state) => state.fileTree.fileNames);

  const structure = [
    {
      type: 'folder',
      name: 'src',
      childrens: [
        {
          type: 'folder',
          name: 'App.jsx',
          childrens: [{ type: 'file', name: 'fileNameHere' }],
        },
      ],
    },
  ];

  return (
    <div>
      <Tree data={structure} />
    </div>
  );
};

export default TreeFiles;
