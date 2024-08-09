import React from 'react';
import { useStateContext } from '../Context';
import { ProgressBar } from 'react-bootstrap';

export default function MapWeather() {
    const { list } = useStateContext();
    if (!list || list.length === 0) {
        return (
            <div className="text-center my-5">
                <p>Đang tải dữ liệu...</p>
            </div>
        );
    }
    const map = list.filter(item => {
        const hour = item.dt_txt.time.split(':')[0];
        return hour >= 9 && hour < 12;
    });
    const temp = map.map(item => item.main.temp);
    const dates = map.map(item => {
        return item.dt_txt.day;
    });

    return (
        <div className=' my-2'>
            {dates.map((date, index) => (
                <div key={index} className=' mx-2 p-1 mediaWT'>
                    <div className="col">
                        <p>{date}</p>
                    </div>
                    <div className="col">
                        <img src={`https://openweathermap.org/img/wn/${map[index].weather[0].icon}.png`} alt="" />
                        <span className='m-2'>{map[index].weather[0].description.charAt(0).toUpperCase() + map[index].weather[0].description.slice(1)}</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <span>Fells_like : {map[index].main.feels_like}°C</span>
                        <ProgressBar className='mx-2' style={{ height: 5, width: 100 }} variant="danger" now={temp[index] * 2} />
                        <span>
                            Max: {map[index].main.temp_max}°C
                        </span>
                    </div>
                    <div className="col">
                        <p>{temp[index]}°C</p>
                    </div>
                </div>
            ))}
        </div>
    )
}