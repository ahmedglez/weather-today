import React from 'react';
import '../styles/DateComponent.scss';

const DateComponent = () => {
	var date = new Date();
	const formatDate = (date) => {
		let formatted_date =
			date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
		return formatted_date;
	};
	const mydate = formatDate(date);
	return (
		<div className='date'>
			<h3>{mydate}</h3>
		</div>
	);
};

export default DateComponent;
