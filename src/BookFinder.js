import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import FoundedList from './FoundedList';
import BookInformation from './BookInformation';

class BookFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isbn: '', records: {}, items: [] };
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    const theIsbn = this.state.isbn;
    if (theIsbn) {
      const url = `http://localhost:33/BookFinder/isbn/${theIsbn}`;
      Axios.get(url)
      .then(response => 
        this.setState({records: response.data.records, items: response.data.items})
      )
      .catch(error =>
        {
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
        <BookInformation records={this.state.records}/>
        <FoundedList items={this.state.items}/>
      </Container>
    );
  }
}

export default BookFinder;