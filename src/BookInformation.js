import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

function BookInformation(props) {
  if (props.records) {
    const book = props.records['/books/'];
    if (book){
      return (
        <Card style={{color: 'black', width: '50vw', fontSize: '20px'}}>
          <Row>
            <Col md={6}>
              <Card.Img variant="top" src={book.data.cover.medium} fluid="true"/> 
            </Col>
            <Col md={6}>
              <Card.Header>{book.data.title}</Card.Header>
              <Card.Title>{book.data.publish_Date}</Card.Title>
              <Card.Body>
                <Card.Text>Number of pages {book.data.number_Of_Pages}</Card.Text>
                <Card.Text>                    
                  <ListGroup>
                    <ListGroup.Item variant='info'>
                      ISBN
                    </ListGroup.Item>
                      {book.isbns.map(
                        item => 
                          <ListGroup.Item as="li">{item}</ListGroup.Item>
                      )}
                  </ListGroup>
                  <ListGroup>
                    <ListGroup.Item variant='info'>
                      Authors
                    </ListGroup.Item>
                      {book.data.authors.map(
                        item => 
                          <ListGroup.Item>{item.name}</ListGroup.Item>
                      )}
                  </ListGroup>
                  <ListGroup>
                  <ListGroup.Item variant='info'>
                      Publishers
                    </ListGroup.Item>
                      {book.data.publishers.map(
                        item => 
                          <ListGroup.Item>{item.name}</ListGroup.Item>
                      )}
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>    
      );
    } else {
      return <div></div>
    }
  } else {
    return <div></div>
  }
}

export default BookInformation;