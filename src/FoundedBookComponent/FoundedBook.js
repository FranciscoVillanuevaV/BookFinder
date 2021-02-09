import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import TheModal from '../TheModalComponent/TheModal';
import './FoundedBook.css';

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
				<Card className="p-3 mb-5 bg-white rounded">
				<svg preserveAspectRatio="xMidYMid meet"  x="0" y="0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<image height="100%" width="100%" alt="main" href={book.imageLinks ? book.imageLinks.thumbnail : urlNotImage} src={book.imageLinks ? book.imageLinks.thumbnail : urlNotImage}/>
				</svg>
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
							{
								book.authors && !props.isModal ?
								<ListGroupItem>
									<TheModal authors={book.authors}/>
								</ListGroupItem>
								:
								<div style={{visibility: 'hidden'}}></div>
							}
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