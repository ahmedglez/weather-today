import React, { useContext } from 'react';
import IconComponent from '../components/IconComponent';
import InfoComponent from '../components/InfoComponent';
import '../styles/Main.scss';
import AppContext from '../context/AppContext';

const Main = () => {
	const { location, current } = useContext(AppContext);

	return (
		<div className='main'>
			<IconComponent
				icon={current.condition.icon}
				text={current.condition.text}
			/>
			<InfoComponent
				humidity={current.humidity}
				temp={current.temp_c}
				text={current.condition.text}
			/>
		</div>
	);
};

export default Main;
