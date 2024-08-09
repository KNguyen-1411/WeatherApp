import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useStateContext } from '../Context';
export default function CardAbout() {
    const { weather } = useStateContext();
    return (
        <Col className='cardbody'>
            <Card className='card4'>
                <Card.Body>
                    <h4>Nhiệt độ cảm nhận:</h4>
                    <h1>{weather.main.feels_like}°C</h1>
                    <div className=''>
                        <div className='d-flex'>
                            <span>Min:</span>
                            <span>{weather.main.temp_min}°C</span>
                        </div>
                        <div className='d-flex'>
                            <span>Max:</span>
                            <span>{weather.main.temp_max}°C</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className='card4'>
                <Card.Body>
                    <h4>Độ ẩm:</h4>
                    <h3>{weather.main.humidity}%</h3>
                    <h4>Tốc độ gió:</h4>
                    <h3>{weather.wind.speed} m/s</h3>
                </Card.Body>
            </Card>
            <Card className='card4'>
                <Card.Body>
                    <h4>Mặt trời mọc:</h4>
                    <h3>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</h3>
                    <h4>Mặt trời lặn:</h4>
                    <h3>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</h3>
                </Card.Body>
            </Card>
            <Card className='card4'>
                <Card.Body>
                    <h4>Áp suất:</h4>
                    <h3>{weather.main.pressure} hPa</h3>
                    <h4>Mực nước biển:</h4>
                    <h3>{weather.main.sea_level} hPa</h3>
                </Card.Body>
            </Card>
        </Col >
    )
}
