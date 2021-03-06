import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalToggle } from '../redux/navigationSlice';
import '../stylesheets/ExportModal.css';

import exportApp from './Export';

const ExportModal = () => {
  const show = useSelector((state) => state.navigation.showModal);
  const snapshot = useSelector((state) => state.canvas);
  const dispatch = useDispatch();

  if (!show) return null;

  const closeClick = (e) => dispatch(modalToggle(false));

  return (
    <Modal.Dialog className='modal'>
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Select which files you would like to export.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => exportApp()}>Export App</Button>
        <Button>Export Component Files</Button>
        <Button
          onClick={(e) => {
            closeClick(e);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default ExportModal;
