import Modal from 'react-bootstrap/Modal';
import FoundedList from '../FoundedListComponent/FoundedList';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import './TheModal.css';

function SomeModal(props) {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Free options
        </Button>
  
        <Modal
          animation={false}
          show={show}
          onHide={() => setShow(false)}
					dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Free resources
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<FoundedList items={props.items}/>
          </Modal.Body>
        </Modal>
      </>
    );
	}

export default SomeModal;