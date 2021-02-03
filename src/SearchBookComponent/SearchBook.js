import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import InfiniteScroll from 'react-infinite-scroller';

import FoundedBooks from '../FoundedBooksComponent/FoundedBooks';

class SearchBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {word: '', items: [], hasMoreItems: false };
  }
  request = (pageNumber) => {
    const theWord = this.state.word;
    if (theWord) {
      const url = `https://localhost:5001/BookFinder/search/keyword/${theWord}?pageNumber=${pageNumber}`;
      Axios.get(url)
      .then(response => 
        {	
          let totItems = this.state.items;
          totItems.push(...response.data.items)
          this.setState({items: totItems, hasMoreItems: true})
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

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.request(1);
  }
  onChangeHandler = (event) => {
    this.setState({word: event.target.value, items: [], hasMoreItems: false})
  }
  loadItems = (page) => {
    let _page = ++page;
    console.log(_page)
    this.request(_page);
  }
  render() {
    const spin = 
      <div key={'theLoad'} className="text-center">
        <Spinner style={{width: "3rem", height: "3rem"}} animation="border" variant="primary" />
      </div>;
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
        <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems}
                hasMore={this.state.hasMoreItems}
                loader={spin}>
          <FoundedBooks items={this.state.items}/>
        </InfiniteScroll>
      </Container>
    );
  }
}

export default SearchBook;