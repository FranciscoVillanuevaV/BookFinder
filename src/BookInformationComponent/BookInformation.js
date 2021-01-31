import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import TheModal from '../TheModalComponent/TheModal';

function BookInformation(props) {
  if (props.records) {
    const book = props.records['/books/'];
    if (book) {
      return (
        <Row>
          <Col sm={6} md={4}>  
            <Card style={{boxShadow: '0 .5rem 1rem rgba(0, 191, 255, .3)'}} className="p-3 mb-5 bg-white rounded">
            <img style={{objectFit: "contain", maxHeight: "600px"}} alt="mainBook" height="100%" width="100%" src={book.data.cover.large} />
            <Card.Header>{book.data.title} ({book.data.publish_Date})</Card.Header>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Authors:
                    {book.data.authors.map(
                      item => 
                      {
                        return book.data.authors[0] === item ? ` ${item.name}` : `, ${item.name}`
                      }
                    )}
                  </ListGroupItem>
                  <ListGroupItem>Number of pages {book.data.number_Of_Pages}</ListGroupItem>
                  <ListGroupItem>
                    ISBN: 
                    {book.isbns.map(
                      item => 
                      {
                        return book.isbns[0] === item ? ` ${item}` : `, ${item}`
                      }
                    )}
                  </ListGroupItem>
                  <ListGroupItem>
                    Publishers:
                      {book.data.publishers.map(
                          item => 
                          {
                            return book.data.publishers[0] === item ? ` ${item.name}` : `, ${item.name}`
                          }
                      )}
                  </ListGroupItem>
                  <ListGroupItem>
                    <TheModal items={props.items}/>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      );
    } else {
      return <div></div>
    }
  } else {
    return <div></div>
  }
}

export default BookInformation;