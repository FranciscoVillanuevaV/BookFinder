import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import TheModal from '../TheModalComponent/TheModal';

function FoundedBook(props) {
  if (props.info.volumeInfo) {
    let book = props.info.volumeInfo;
    const notAvailable = ' Not available';
    const urlNotImage = 'https://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg';
		const authors = () => {
			if (book.authors){
				if (book.authors.length){
					return book.authors.map(
						item => 
							book.authors[0] === item 
							? ` ${item}` 
							: `, ${item}`
						)
				}else{
					return notAvailable;
				}
			}else{
				return notAvailable;
			}
		}
		const Identifiers = () => {
			if (book.industryIdentifiers){
				if (book.industryIdentifiers.length){
					return book.industryIdentifiers.map(
						item => 
							book.industryIdentifiers[0] === item 
							? ` ${item.type}: ${item.identifier}` 
							: `, ${item.type}: ${item.identifier}`
						)
				}else{
					return notAvailable;
				}
			}else{
				return notAvailable;
			}
		}	
		if (book) {
      return ( 
				<Card style={{minWidth: "100%", boxShadow: '0 .5rem 1rem rgba(0, 191, 255, .3)'}} className="p-3 mb-5 bg-white rounded">   
				<svg style={{height: "auto", width: "100%"}} preserveAspectRatio="xMidYMid meet"  x="0" y="0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<image alt="main" style={{width: "100%", height: "100%"}} xlinkHref={book.imageLinks ? book.imageLinks.thumbnail : urlNotImage}/>
				</svg>
				{/* <img style={{objectFit: "contain", maxHeight: "600px"}} alt="mainBook" height="100%" width="100%" src={book.data.cover.large} /> */}
				{/* <img style={{objectFit: "contain", maxHeight: "600px"}} alt="mainBook" height="100%" width="100%" src={book.imageLinks.thumbnail ? book.imageLinks.thumbnail : urlNotImage} /> */}
				<Card.Header>{book.title ? book.title : notAvailable} ({book.publishedDate ? book.publishedDate : notAvailable})</Card.Header>
					<Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem>
								Authors:
								{
									authors()
								}
							</ListGroupItem>
							<ListGroupItem>Number of pages: {book.pageCount ? book.pageCount : notAvailable}</ListGroupItem>
							<ListGroupItem>
							Identifiers: 
								{
									Identifiers()
								}
							</ListGroupItem>
							<ListGroupItem>
								Publisher: {book.publisher ? book.publisher : notAvailable}
							</ListGroupItem>
							<ListGroupItem>
								{/* <TheModal isbn={book.industryIdentifiers ? book.industryIdentifiers[0].identifier : ""}/> */}
								<TheModal isbn={9780486278070}/>
							</ListGroupItem>
						</ListGroup>
					</Card.Body>
				</Card>
      );
    } else {
      return <div></div>
    }
  } else {
    return <div></div>
  }
}

export default FoundedBook;