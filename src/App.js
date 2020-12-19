import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import './App.css';
import './toggle-button.css';

import { lightTheme, darkTheme, GlobalStyles } from './themes.js';
import GeoLocation from './GeoLocation';

const StyledApp = styled.div`
	color: ${(props) => props.theme.fontColor};
	transition: color 0.25s ease-out;
`;

function App() {
	const [theme, setTheme] = useState('light');

	const themeToggler = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	return (
		<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
			<GlobalStyles />
			<StyledApp>
				<div className="App">
					<GeoLocation />
				</div>
				<div className="App toggle-button">
					<label className="switch">
						<input type="checkbox" onClick={() => themeToggler()}></input>
						<span className="slider round"></span>
					</label>
				</div>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
