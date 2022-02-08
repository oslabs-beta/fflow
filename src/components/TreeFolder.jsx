import React, { useState } from 'react';
import { FaFolder } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFolder = styled.div`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
    color: var(--textColor);
    width: 250px;
  }

  .folder--label:hover {
    background-color: var(--neutral-800);
  }
`;

const Collapsible = styled.div`
  height: ${(p) => (p.isOpen ? 'auto' : '0')};
  overflow: hidden;
  color: var(--textColor);
`;

const TreeFolder = ({ name, children }) => {
  // sets default view of filetree to be expanded 
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className='folder--label' onClick={handleToggle}>
        <span className='folder-icon-in-file-tree'>
          <FaFolder />
        </span>
        <span className='file-label-in-filetree'>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

export default TreeFolder;
