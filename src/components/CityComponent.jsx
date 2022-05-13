import React from 'react';
import '../styles/CityComponent.scss';

const CityComponent = ({ city }) => {
	return (
		<div className='city'>
			<h3>{city}</h3>
		</div>
	);
};

export default CityComponent;
