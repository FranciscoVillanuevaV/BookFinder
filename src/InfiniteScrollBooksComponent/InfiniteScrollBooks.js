import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import InfiniteScroll from 'react-infinite-scroller';

import FoundedBooks from '../FoundedBooksComponent/FoundedBooks';

class InfiniteScrollBooks extends React.Component {
	
	loadItems = () => {
		this.props.request(this.props.pageStart);
	}
	
	render() {
		const spin = 
		<div key={'theLoad'} className="text-center">
				<Spinner style={{width: "3rem", height: "3rem"}} animation="border" variant="primary" />
		</div>;
		return (
			<InfiniteScroll
			pageStart={0}
			loadMore={this.loadItems}
			hasMore={this.props.hasMoreItems}
			useWindow={this.props.useWindow}
			loader={spin}>
				<FoundedBooks items={this.props.items}/>
			</InfiniteScroll>
		)
	}
}

export default InfiniteScrollBooks;