import React, { useContext, useEffect } from 'react';
import DateComponent from '../components/DateComponent';
import TimeComponent from '../components/TimeComponent';
import CityComponent from '../components/CityComponent';
import '../styles/Header.scss';
import AppContext from '../context/AppContext';

const Header = () => {
	const { location, current } = useContext(AppContext);
	const datetime = new String(location.localtime);
	const time = datetime.split(' ')[1];
	const city = location.name
	const region = location.region;
	const country = location.country
	console.log("Location",location)

	return (
		<div className='header'>
			<DateComponent  />
			<TimeComponent time={time} />
			<CityComponent city={city} country={country} region={region} />
		</div>
	);
};

export default Header;
