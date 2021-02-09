import React from 'react';
import Axios from 'axios';

import InfiniteScrollBooks from '../InfiniteScrollBooksComponent/InfiniteScrollBooks';

class FatherSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [], hasMoreItems: false, 
      firstSubmite: true, pageStart: 0
    };
	}

	ajaxBooksReq = (url, moveScroll) => {
		Axios.get(url)
      .then(response => 
        {
          if (response.data)
          {
            let pag = this.state.pageStart;
            let totItems = this.state.items;
            let isMore = true;
            if (response.data.items.length < 10 )
            {
              console.log('para por menor a 10');
              isMore = false;
            }
            totItems.push(...response.data.items)
            this.setState({items: totItems, hasMoreItems: isMore, pageStart: ++pag})
          } else {
            console.log('para por respuesta vacia')
            this.setState({hasMoreItems: false})
          }
        }
      )
      .then(() => {
        if (this.state.pageStart === 1) {
          moveScroll();
        }
      })
      .catch(error =>
        {
          alert(error.message);
          console.dir(error);
          console.log(error.message);

          // si error.response ta definido es error de server
          if (error.response)
          {
            console.log(error.response.status);
          }
          // caso contrario es error de red
          console.log('do something bitch');  
        }
      ); 
	}
		
	reset = () => {
		this.setState({items: [], hasMoreItems: false, firstSubmite: true, pageStart: 0})
  }
  
  onSubmitHandler = (event) => {
		event.preventDefault();
		if (this.state.firstSubmite)
		{
			this.requestBooks(0);
		}
		this.setState({firstSubmite: false});
  }
  
  onChangeHandler = (event, property) => {
    this.setState({[property]: event.target.value})
    this.reset();
  }

	infiniteScroll = (reqFunc) => 
		<InfiniteScrollBooks
    isModal={false} 
		pageStart={this.state.pageStart}
		hasMoreItems={this.state.hasMoreItems}
		items={this.state.items}
		request={reqFunc}
		useWindow={true}
		/>
}

export default FatherSearch