import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import FoundedBooks from '../FoundedBooksComponent/FoundedBooks';

class SearchBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {word: '', items: [] };
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    const theWord = this.state.word;
    if (theWord) {
      const url = `https://localhost:5001/BookFinder/search/keyword/${theWord}?pageNumber=4`;
      Axios.get(url)
      .then(response => 
        {
				  	//console.log(response.data.items);	
            this.setState({items: response.data.items})
        }
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
    this.setState({word: event.target.value, items: []})
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmitHandler}>
          <Form.Row>
            <Col md={6} className="my-1">
              <Form.Control placeholder="word" onChange={this.onChangeHandler}/>
            </Col>
            <Col md={3} xs="auto" className="my-1">
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Row>
        </Form>
        <br></br>
        <FoundedBooks items={this.state.items}/>
      </Container>
    );
  }
}

export default SearchBook;