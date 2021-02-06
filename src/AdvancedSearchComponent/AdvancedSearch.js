import React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import FatherSearch from '../FatherSearchComponent/FatherSearch';

class AdvancedSearch extends FatherSearch {
	constructor(props) {
		super(props);
		this.state = {
			author: '', title: '',
			isbn: '', publisher: ''
		};
	}

	requestBooks = pageNumber => {
		const author = this.state.author;
		const title = this.state.title;
		const isbn = this.state.isbn;
		const publisher = this.state.publisher;
		if (author || title || isbn || publisher) {
			const url = `https://localhost:5001/BookFinder/search/advanced?pageNumber=${pageNumber}&isbn=${isbn}&author=${author}&publisher=${publisher}&title=${title}`;
			console.log(url);
			this.ajaxBooksReq(url);
		}
	}

	render() {
		return (
			<>
				<h3>Advanced search</h3>
				<Form onSubmit={this.onSubmitHandler}>
					<Form.Group as={Row}>
						<Form.Label column sm={2}>
							Title
						</Form.Label>
						<Col sm={10}>
							<Form.Control placeholder="Title" onChange={(event) => this.onChangeHandler(event, 'title')}/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Form.Label column sm={2}>
							Author
						</Form.Label>
						<Col sm={10}>
							<Form.Control placeholder="Author" onChange={(event) => this.onChangeHandler(event, 'author')}/>
						</Col>
					</Form.Group>
					
					<Form.Group as={Row}>
						<Form.Label column sm={2}>
							Publisher
						</Form.Label>
						<Col sm={10}>
							<Form.Control placeholder="Publisher" onChange={(event) => this.onChangeHandler(event, 'publisher')}/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Form.Label column sm={2}>
							ISBN
						</Form.Label>
						<Col sm={10}>
							<Form.Control placeholder="ISBN" onChange={(event) => this.onChangeHandler(event, 'isbn')}/>
						</Col>
					</Form.Group>

					<Form.Group as={Row}>
						<Col sm={{ span: 10, offset: 2 }}>
							<Button type="submit">Search</Button>
						</Col>
					</Form.Group>
				</Form>	
				{this.infiniteScroll(this.requestBooks)}
			</>
		)
	}
}

export default AdvancedSearch