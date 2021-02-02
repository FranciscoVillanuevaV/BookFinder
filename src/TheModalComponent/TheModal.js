import Modal from 'react-bootstrap/Modal';
import FoundedList from '../FoundedListComponent/FoundedList';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import Axios from 'axios';
import './TheModal.css';

// const ax = url => {
//   Axios.get(url)
//         .then(response => 
//           {
//             items = [];
//             console.log(url);
//             console.log(response.data);
//             console.log(response.status);
//             if (response.data)
//             {
//               items.push(...response.data.items);
//             }
//             console.log(items);
//           }
//         )
//         .catch(error =>
//           {
//             alert(error.message);
//             console.dir(error);
//             console.log(error.message);
  
//             // si error.response ta definido es error de server
//             if (error.response)
//             {
//               console.log(error.response.status);
//             }
//             // caso contrario es error de red
//             console.log('do something bitch');  
//           }
//         );
// }

function SomeModal(props) {
    const [show, setShow] = useState(false);
    const [items, setItems] = useState(false);
    const url = `https://localhost:5001/BookFinder/free/isbn/${props.isbn}`;
      return (
      <>
        <Button variant="primary" onClick={() => 
          {
            Axios.get(url)
            .then(response => 
              {
                let items = [];
                console.log(url);
                console.log(response.data);
                console.log(response.status);
                if (response.data)
                {
                  items.push(...response.data.items);
                }
                console.log(items);
                setItems(items);
              }
            ).then(setShow(true))
            .catch(error =>
              {
                alert(error.message);
                console.dir(error);
                console.log(error.message);
      
                // si error.response ta definido es error de server
                if (error.response)
                {
                  console.log(error.response.status);
                }
                // caso contrario es error de red
                console.log('do something bitch');  
              }
            ); 
          }
        }>
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
						<FoundedList items={items}/>
          </Modal.Body>
        </Modal>
      </>
    );
	}

export default SomeModal;