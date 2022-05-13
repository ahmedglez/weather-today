import React from 'react';
import '../styles/TimeComponent.scss';

const TimeComponent = () => {
	const date = new Date();
	const result = date.toLocaleTimeString();
	const str = result.substring(0, result.length - 3);
	console.log(result);

	return (
		<div className='time'>
			<p>{str}</p>
		</div>
	);
};

export default TimeComponent;
