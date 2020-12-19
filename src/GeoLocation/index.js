import { useState } from 'react';
import FadeIn from 'react-fade-in';

const GeoLocation = () => {
	const [details, setDetails] = useState(null);

	const getUserGeoLocationDetails = () => {
		fetch(process.env.REACT_APP_GEO_LOCATION)
			.then((response) => response.json())
			.then((data) => setDetails(data));
	};

	return (
		<FadeIn delay="500" transitionDuration="700">
			<div>
				{getUserGeoLocationDetails()}
				<div>
					{' '}
					{details && (
						<h1>
							Hello {details.IPv4}, {details.country_name}
						</h1>
					)}
				</div>
			</div>
		</FadeIn>
	);
};

export default GeoLocation;
