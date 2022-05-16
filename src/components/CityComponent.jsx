import React from 'react';
import '../styles/CityComponent.scss';

const CityComponent = ({ city, country, region }) => {
	return (
		<div className='city'>
			<h3>{city} - {region} - {country}</h3>
		</div>
	);
};

export default CityComponent;
