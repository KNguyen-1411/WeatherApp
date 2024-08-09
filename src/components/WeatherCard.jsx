import React from 'react';
import { Card } from 'react-bootstrap';
import { useStateContext } from '../Context';

export default function WeatherCard() {
    const { weather } = useStateContext();

    if (!weather || !weather.main || !weather.weather) {
        return (
            <Card style={{ width: 300 }}>
                <Card.Header>Loading...</Card.Header>
                <Card.Body>
                    <p>Weather data not available.</p>
                </Card.Body>
            </Card>
        );
    }

    const temp = Math.round(weather.main.temp) || '--';
    const icon = weather.weather[0].icon;
    const city = weather.name;
    const temp_max = weather.main.temp_max.toFixed(1);
    const temp_min = weather.main.temp_min.toFixed(1);

    return (
        <Card style={{ width: 300 }}>
            <Card.Header>{city}</Card.Header>
            <Card.Body>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                <Card.Title>{temp}°C</Card.Title>
            </Card.Body>
            <Card.Footer>
                <div>
                    <span>Max: {temp_max}°C</span>
                    <span>   Min: {temp_min}°C</span>
                </div>
            </Card.Footer>
        </Card>
    );
}
