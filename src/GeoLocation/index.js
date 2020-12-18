import { useState } from 'react';

const GeoLocation = () => {
	const [details, setDetails] = useState(null);

	const getUserGeoLocationDetails = () => {
		fetch(process.env.REACT_APP_GEO_LOCATION)
			.then((response) => response.json())
			.then((data) => setDetails(data));
	};

	return (
		<>
			<div>
				{getUserGeoLocationDetails()}
				<div>{details && <h1>{details.IPv4}</h1>}</div>
			</div>
		</>
	);
};

export default GeoLocation;
