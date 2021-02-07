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
		this.myRefResult = React.createRef();
	}

	requestBooks = pageNumber => {
		const author = this.state.author;
		const title = this.state.title;
		const isbn = this.state.isbn;
		const publisher = this.state.publisher;
		if (author || title || isbn || publisher) {
			const url = `https://localhost:5001/BookFinder/search/advanced?pageNumber=${pageNumber}&isbn=${isbn}&author=${author}&publisher=${publisher}&title=${title}`;
			console.log(url);
			this.ajaxBooksReq(url, this.moveScroll);
		}
	}

	moveScroll = () => {
		const resultsPosition = this.myRefResult.current.getBoundingClientRect().top;
		window.scroll({
			top: resultsPosition - 70,
			left: 0,
			behavior: 'smooth'
		});
	}

	render() {
		return (
			<>
				<Form onSubmit={this.onSubmitHandler}>
					<Form.Group as={Row}>
						<Col sm={4}>
							<Form.Control placeholder="Title" onChange={(event) => this.onChangeHandler(event, 'title')}/>
						</Col>
						<Col sm={4}>
							<Form.Control placeholder="Author" onChange={(event) => this.onChangeHandler(event, 'author')}/>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Col sm={4}>
							<Form.Control placeholder="Publisher" onChange={(event) => this.onChangeHandler(event, 'publisher')}/>
						</Col>
						<Col sm={4}>
							<Form.Control placeholder="ISBN" onChange={(event) => this.onChangeHandler(event, 'isbn')}/>
						</Col>	
					</Form.Group>
					<Form.Group as={Row}>
						<Col sm={2}>
							<Button type="submit">Search</Button>
						</Col>
					</Form.Group>
					{/* <Form.Group as={Row}>
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
					</Form.Group> */}
				</Form>	
				<div ref={this.myRefResult}>
					{this.infiniteScroll(this.requestBooks)}
				</div>
			</>
		)
	}
}

export default AdvancedSearch