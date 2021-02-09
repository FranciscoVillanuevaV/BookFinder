import Jumbotron from 'react-bootstrap/Jumbotron';
import './About.css';

const TextBounce = props => {
	return (
		<div key={props.delay} style={{float: 'left', marginRight: 10}}>
			<h4 className="shadows" style={{animationDelay: `${props.delay}s`}}>{props.t}</h4>
		</div>
	)
}

const About = () => {
	let delay = 1;
  return (
		<>
		<Jumbotron>
			<div className="flex-container">
				<div>
					{
						['B','y','F','r','a','n','c','i','s','c','o']
						.map(x => <TextBounce t={x} delay={++delay/10}/>)
					}
				</div>
				<div>
					{
						['V','i','l','l','a','n','u','e','v','a']
						.map(x => <TextBounce t={x} delay={++delay/10}/>)
					}
				</div>
			</div>
			<div style={{clear: 'both'}}>
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
			</div>
		</Jumbotron>
		</>
	)
}

export default About;