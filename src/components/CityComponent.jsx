import React from 'react';
import '../styles/CityComponent.scss';

const CityComponent = ({ city }) => {
	return (
		<div className='city'>
			<p>{city}</p>
		</div>
	);
};

export default CityComponent;
