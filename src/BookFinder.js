import React from 'react';
import FoundedList from './FoundedList';
import BookInformation from './BookInformation';

import Book from './Classes/Book';

class BookFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isbn: '', resultsFounded: [], bookInfo: {}};
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
    const theIsbn = this.state.isbn;
    if (theIsbn) {
      Book.lookForIsbn('someIsbn');
      const bookInfo = Book.info;
      this.setState({resultsFounded: [...Book.alternatives], bookInfo: {...bookInfo}});
    }
  }
  onChangeHandler = (event) => {
    this.setState({isbn: event.target.value});
    this.setState({resultsFounded: []});
    this.setState({bookInfo: {}})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
        <p>Enter your isbn, and submit:</p>
        <input
          type='text'
          onChange={this.onChangeHandler}
        />
        <input
          type='submit'
        />
        </form>
        <BookInformation information={{...this.state.bookInfo}} />
        <FoundedList resultsFounded={[...this.state.resultsFounded]} />
      </div>
    );
  }
}

export default BookFinder;