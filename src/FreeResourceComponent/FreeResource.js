import Card from "react-bootstrap/esm/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

//https://askavy.com/react-card/
//
function FreeResource(props) {
	return(
			<Card style={{boxShadow: '0 .5rem 1rem rgba(0, 191, 255, .3)'}} className="p-3 mb-5 bg-white rounded">
				<svg className="card-img-top" height="250" width="100%" xmlns="http://www.w3.org/2000/svg">
					<image alt="imageBook" height="100%" width="100%" href={props.info.cover.medium} />
				</svg>
				<Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>
							{props.info.match} ({props.info.publishDate})
						</ListGroupItem>
						<ListGroupItem>
							<Card.Link href={props.info.itemUrl} target="_blank">{props.info.status}</Card.Link>
						</ListGroupItem>
					</ListGroup>
				</Card.Body>
			</Card>
	)
}

export default FreeResource;