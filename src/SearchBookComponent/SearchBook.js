import React from 'react';
import Container from 'react-bootstrap/Container';

import BasicSearch from '../BasicSearchComponent/BasicSearch';
import AdvancedSearch from '../AdvancedSearchComponent/AdvancedSearch';
import Menu from '../MenuComponent/Menu';

class SearchBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {advancedSearch: false};
  }
   
  changeSearchKindOnClickHandler = show => {
    this.setState({advancedSearch: show})
  }

  render() {
    return (
      <>
        <Menu 
          basic={() => this.changeSearchKindOnClickHandler(false)}
          advanced={() => this.changeSearchKindOnClickHandler(true)}
        />
        <Container>
          {
            this.state.advancedSearch 
            ?
            <AdvancedSearch 
            />
            :
            <BasicSearch />
          }
        </Container>
      </>
    );
  }
}

export default SearchBook;