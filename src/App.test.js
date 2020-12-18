import { render, screen } from '@testing-library/react';
import App from './App';
import GeoLocation from './GeoLocation';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	shallow(<App />);
});

it('renders GeoLocation without crashing', () => {
	shallow(<GeoLocation />);
});
