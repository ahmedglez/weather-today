import React from 'react';
import '../styles/IconComponent.scss';
import imagen from '../assets/sol.png';

const IconComponent = ({ icon }) => {
	return (
		<div className='icon'>
			<img src={icon} alt='' />			
		</div>
	);
};

export default IconComponent;
