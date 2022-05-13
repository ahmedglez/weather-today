import React from 'react';
import '../styles/InfoComponent.scss'

const InfoComponent = ({humidity, text, temp}) => {
    return (
        <div className='info'>
            <h2>{text}</h2>
            <h3>Temp: {temp} C°</h3>
            <h3>Humidity: {humidity} %</h3>
        </div>
    );
};

export default InfoComponent;