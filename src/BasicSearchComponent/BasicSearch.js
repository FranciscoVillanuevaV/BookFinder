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
		this.myRefResult = React.createRef();
	}

	requestBooks = pageNumber => {
		const theWord = this.state.word;
		if (theWord) {
			const url = `https://localhost:5001/BookFinder/search/keyword/${theWord}?pageNumber=${pageNumber}`;
			console.log(url);
			this.ajaxBooksReq(url, this.moveScroll);
		}
	}

	moveScroll = () => {
		const resultsPosition = this.myRefResult.current.getBoundingClientRect().top;
		console.log(resultsPosition);
		window.scroll({
			top: resultsPosition - 70,
			left: 0,
			behavior: 'smooth'
		});
	}
	
	render() {
		return(
			<>
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
				<div ref={this.myRefResult}>
					{this.infiniteScroll(this.requestBooks)}
				</div>
			</>
		)
	}
}

export default BasicSearch