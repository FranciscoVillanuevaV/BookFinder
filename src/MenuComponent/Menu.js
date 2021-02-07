import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Menu extends React.Component {
	render() {
		return(
			<Navbar fixed="top" bg="primary" variant="dark">
				<Navbar.Brand>BookFinder</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link onClick={this.props.basic}>
						Basic search
					</Nav.Link>
					<Nav.Link onClick={this.props.advanced}>
						Advanced search
					</Nav.Link>
					<Nav.Link onClick={this.props.about}>About</Nav.Link>
				</Nav>
  		</Navbar>	
		)
	}
}

export default Menu;
// const Menu = props => {
// 	return(
// 		<Navbar fixed="top" bg="primary" variant="dark">
// 			<Navbar.Brand>BookFinder</Navbar.Brand>
// 			<Nav className="mr-auto">
// 				<Nav.Link onClick={props.basic}>
// 					Basic search
// 				</Nav.Link>
// 				<Nav.Link onClick={props.advanced}>
// 					Advanced search
// 				</Nav.Link>
// 				<Nav.Link>About</Nav.Link>
// 			</Nav>
//   	</Navbar>
// 	);	
// }
  

