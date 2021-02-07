import React from 'react';
import Axios from 'axios';

class ModalSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [], hasMoreItems: false, 
      pageStart: 0
    };
	}

	ajaxBooksReq = url => {
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
}
export default ModalSearch