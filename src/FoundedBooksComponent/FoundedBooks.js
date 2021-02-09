import FoundedBook from '../FoundedBookComponent/FoundedBook';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FoundedBooks (props){
  let t = 0;
  if (props.items){
    const theItems = props.items;
    if (theItems.length) {
      return( 
        <Row style={{marginTop: "30px"}}>
          {theItems.map( 
            item =>
              <Col key={++t} md={6} lg={4}>
                <FoundedBook isModal={props.isModal} info={item} />
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