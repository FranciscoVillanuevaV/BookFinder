import FoundedBook from '../FoundedBook/FoundedBook';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FoundedBooks (props){
  let t = 0;
  if (props.items){
    const theItems = props.items;
    if (theItems.length) {
      return( 
        <Row>
          {theItems.map( 
            item =>
              <Col key={++t} sm={6} md={4}>
                <FoundedBook info={item} />
              </Col>         
          )}    
        </Row>
      );
    } else {
      return <div style={{visibility: 'hidden'}}></div>
    }
  } else {
    return <div style={{visibility: 'hidden'}}></div>
  }
}

export default FoundedBooks;