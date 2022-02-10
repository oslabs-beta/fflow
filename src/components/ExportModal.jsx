import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalToggle } from '../redux/navigationSlice';
import '../stylesheets/ExportModal.css';

import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';

import exportApp from './Export';
// import 'bootstrap/dist/css/bootstrap.min.css';

const ExportModal = () => {
  const show = useSelector((state) => state.navigation.showModal);
  const snapshot = useSelector((state) => state.canvas);
  const dispatch = useDispatch();

  if (!show) return null;


  const closeClick = (e) => {
    console.log('close button clicked');
    dispatch(modalToggle(false));
  };

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
