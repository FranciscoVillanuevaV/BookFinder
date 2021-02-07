import Jumbotron from 'react-bootstrap/Jumbotron';
import './About.css';

const about = () => {
  return (
		<Jumbotron>
			<h4 className="textEffect">By Francisco Villanueva</h4>
			<p>
				This is a React app that works using the <a rel="noopener noreferrer" target="_blank" href="https://developers.google.com/books/docs/v1/using">Google Books API</a>. 
				Find my code <a rel="noopener noreferrer" target="_blank" href="https://github.com/FranciscoVillanuevaV/BookFinder">here</a> at GitHub.
			</p>
			<h4>Contact</h4>
			<p>
				<i className="fas fa-envelope fa-lg" aria-hidden="true"></i> villanuevavazquez.francisco@gmail.com
			</p>
			<p>
				<i className="fab fa-github fa-lg"></i> FranciscoVillanuevaV
			</p>
			<div>		 
			</div>
		</Jumbotron>
	)
}

export default about;