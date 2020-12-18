import { Component } from 'react';
import './App.css';

import GeoLocation from './GeoLocation';

class App extends Component {
	render() {
		return (
			<div className="App">
				<GeoLocation />
			</div>
		);
	}
}

export default App;
