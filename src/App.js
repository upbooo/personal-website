import { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [{ name: 'toan' }, { name: 'toren' }, { name: 'tfads' }],
	};

	switchNameHandler = () => {
		this.setState({
			persons: [{ name: 'gay' }, { name: 'gay2' }, { name: 'gay3' }],
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Hello React</h1>
				<button onClick={this.switchNameHandler}>Gay</button>
				<Person name={this.state.persons[0].name} />
				<Person name={this.state.persons[1].name} />
				<Person name={this.state.persons[2].name} />
			</div>
		);
	}
}

export default App;
