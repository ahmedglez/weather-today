import React from 'react';
import '../styles/TimeComponent.scss';

const TimeComponent = () => {
	const date = new Date();
	const result = date.toLocaleTimeString();
	const str = result.substring(0, result.length - 3);
	console.log(result);

	return (
		<div className='time'>
			<h4>{date.getHours()} : {date.getMinutes()<10 && "0"}{date.getMinutes()} {date.getHours()<12 ? 'am' : 'pm'}</h4>
		</div>
	);
};

export default TimeComponent;
