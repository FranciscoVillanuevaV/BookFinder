import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Menu = props => {
	return(
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand>BookFinder</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link onClick={props.basic}>
					Basic search
				</Nav.Link>
				<Nav.Link onClick={props.advanced}>
					Advanced search
				</Nav.Link>
				<Nav.Link>About</Nav.Link>
			</Nav>
  	</Navbar>
	);	
}
  
export default Menu;
