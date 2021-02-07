import React from 'react';
import Container from 'react-bootstrap/Container';

import BasicSearch from '../BasicSearchComponent/BasicSearch';
import AdvancedSearch from '../AdvancedSearchComponent/AdvancedSearch';
import About from '../AboutComponent/About';
import Menu from '../MenuComponent/Menu';

class SearchBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {advancedSearch: false, about: false};
  }
   
  changeSearchKindOnClickHandler = show => {
    this.setState({advancedSearch: show, about: false})
    window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
  }

  render() {
    return (
      <>
        <Menu ref={this.refMenu} 
          basic={() => this.changeSearchKindOnClickHandler(false)}
          advanced={() => this.changeSearchKindOnClickHandler(true)}
          about={() => this.setState({about: true})}
        />
        <Container style={{marginTop: "100px"}}>
          {
            this.state.about
            ?
            <About/>
            :
            this.state.advancedSearch 
            ?
            <AdvancedSearch/>
            :
            <BasicSearch/>
          }
        </Container>
      </>
    );
  }
}

export default SearchBook;