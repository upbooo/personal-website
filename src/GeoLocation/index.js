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
				<div
					style={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
					}}
				>
					{' '}
					{details && (
						<h1>
							Hello {details.IPv4}, {details.country_name}
						</h1>
					)}
				</div>
			</div>
		</>
	);
};

export default GeoLocation;
