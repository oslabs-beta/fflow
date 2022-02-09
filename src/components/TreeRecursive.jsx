import React from 'react';
import File from './TreeFile';
import Folder from './TreeFolder';

const TreeRecursive = ({ data }) => {
  // loop through the data
  return data.map((item) => {
    // if its a file render <File />
    if (item.type === 'file') {
      return <File name={item.name} code={item.code} />;
    }
    // if its a folder render <Folder />
    if (item.type === 'folder') {
      return (
        <Folder data-testid='folder' name={item.name}>
          <TreeRecursive data={item.childrens} />
        </Folder>
      );
    }
  });
};

export default TreeRecursive;
