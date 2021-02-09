import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InfiniteScrollBooks from '../InfiniteScrollBooksComponent/InfiniteScrollBooks';
import ModalSearch from './ModalSearch';
import './TheModal.css';

class ModalBooksByAuthor extends ModalSearch {
  constructor(props) {
    super(props);
    this.state.show = false;
  }

  theRequest = pageNumber => {
    const url = `http://192.168.1.82:33/BookFinder/search/advanced?author=${this.props.authors}&pageNumber=${pageNumber}`;
    console.log(url);
    this.ajaxBooksReq(url); 
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={() => {this.setState({show: true}); this.theRequest(0)}}>
          By the same author
        </Button>
  
        <Modal
          scrollable={true}
          animation={false}
          show={this.state.show}
          onHide={() => this.setState({items: [], hasMoreItems: false, show: false, pageStart: 0})}
					dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              By {this.props.authors}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InfiniteScrollBooks 
            isModal={true}
            pageStart={this.state.pageStart}
            hasMoreItems={this.state.hasMoreItems}
            items={this.state.items}
            request={this.theRequest}
            useWindow={false}
            />
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default ModalBooksByAuthor;