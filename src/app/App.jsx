import React, { useEffect, useState } from 'react';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Footer from '../containers/Footer';
import '../styles/App.css';
import AppContext from '../context/AppContext';
import weatherAPI from '../api/weatherAPI';
import axios from 'axios';
import { initialCurrent, initialLocation } from '../hooks/initialState';
import { internalIpV6, internalIpV4 } from 'internal-ip';

const App = () => {
	const [location, setLocation] = useState(initialLocation);
	const [current, setCurrent] = useState(initialCurrent);
	const requestIp = require('request-ip');

	const createLinkWithLatitudeLongitude = (lat, lon) => {
		const url = weatherAPI + lat + ',' + lon + '&aqi=yes';
		return url;
	};

	useEffect(() => {
		var myIP = 0;
		var url = 'No URL ';

		async function getURL() {
			await navigator.geolocation.getCurrentPosition(function (location) {
				console.log(location.coords.latitude);
				console.log(location.coords.longitude);
				console.log(location.coords.accuracy);
				url = createLinkWithLatitudeLongitude(
					location.coords.latitude,
					location.coords.longitude
				);
				console.log('URL', url);
				getWeather(url);
			});
		}

		getURL();

		async function getWeather(url) {
			console.log(url);
			const response = await axios(url).then((response) => {
				console.log(response.data.current);
				setLocation({
					name: response.data.location.name,
					region: response.data.location.region,
					country: response.data.location.country,
					lat: response.data.location.lat,
					lon: response.data.location.lon,
					tz_id: response.data.location.tz_id,
					localtime_epoch: response.data.location.localtime_epoch,
					localtime: response.data.location.localtime,
				});

				setCurrent({
					temp_c: response.data.current.temp_c,
					temp_f: response.data.current.temp_f,
					is_day: response.data.current.is_day,
					condition: {
						text: response.data.current.condition.text,
						icon: response.data.current.condition.icon,
						code: response.data.current.condition.code,
					},
					wind_mph: response.data.current.wind_mph,
					wind_kph: response.data.current.wind_kph,
					wind_degree: response.data.current.wind_degree,
					wind_dir: response.data.current.wind_dir,
					pressure_mb: response.data.current.pressure_mb,
					pressure_in: response.data.current.pressure_in,
					precip_mm: response.data.current.precip_mm,
					precip_in: response.data.current.precip_in,
					humidity: response.data.current.humidity,
					cloud: response.data.current.cloud,
					feelslike_c: response.data.current.feelslik_c,
					feelslike_f: response.data.current.feelslike_f,
				});
			});
		}
	}, []);

	const date = new Date();

	const data = { location, current };

	if (data.temp_c < 10) {
		document.documentElement.style.setProperty('--background', 'blue');
	} else if (data.temp_c > 30) {
		document.documentElement.style.setProperty('--background', 'red');
	} else if (date.getHours() < 6 || date.getHours > 20) {
		document.documentElement.style.setProperty('--background', 'black');
	} else if (date.getHours() > 6 && date.getHours < 20) {
		document.documentElement.style.setProperty('--background', 'yellow');
	}

	return (
		<AppContext.Provider value={data}>
			<Header />
			<Main />
		</AppContext.Provider>
	);
};

export default App;
