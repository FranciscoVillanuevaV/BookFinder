import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import BookInformation from '../BookInformationComponent/BookInformation';

class BookFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isbn: '', records: {}, items: [] };
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    const theIsbn = this.state.isbn;
    if (theIsbn) {
      const url = `http://192.168.1.82:33/BookFinder/isbn/${theIsbn}`;
      Axios.get(url)
      .then(response => 
        this.setState({records: response.data.records, items: response.data.items})
      )
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
  }
  onChangeHandler = (event) => {
    this.setState({isbn: event.target.value, items: [], records: {}})
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Row>
            <Col md={6} className="my-1">
              <Form.Control placeholder="ISBN" onChange={this.onChangeHandler}/>
            </Col>
            <Col md={3} xs="auto" className="my-1">
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Row>
        </Form>
        <br></br>
        <BookInformation records={this.state.records} items={this.state.items}/>
      </Container>
    );
  }
}

export default BookFinder;