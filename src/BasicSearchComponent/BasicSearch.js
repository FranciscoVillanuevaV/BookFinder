import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import FatherSearch from '../FatherSearchComponent/FatherSearch';

class BasicSearch extends FatherSearch {
	constructor(props) {
		super(props);
		this.state = {
			word: '' 
		};
	}

	requestBooks = pageNumber => {
		const theWord = this.state.word;
		if (theWord) {
			const url = `https://localhost:5001/BookFinder/search/keyword/${theWord}?pageNumber=${pageNumber}`;
			console.log(url);
			this.ajaxBooksReq(url);
		}
	}
	
	render() {
		return (
			<>
				<h3>Basic search</h3>
				<Form onSubmit={this.onSubmitHandler}>
					<Form.Row>
						<Col md={6} className="my-1">
							<Form.Control placeholder="word" onChange={(event) => this.onChangeHandler(event,'word')}/>
						</Col>
						<Col md={3} xs="auto" className="my-1">
							<Button type="submit">Search</Button>
						</Col>
					</Form.Row>
				</Form>
				{this.infiniteScroll(this.requestBooks)}
			</>
		)
	}
}

export default BasicSearch