import React from 'react'
import { useStateContext } from '../Context'

export default function MiniCard() {
    const { list } = useStateContext();
    if (!list || list.length === 0) {
        return (
            <div className="text-center my-5">
                <p>Đang tải dữ liệu...</p>
            </div>
        );
    }
    const map = list.slice(0, 9);
    const temp = map.map(item => item.main.temp);
    const hours = map.map(item => {
        const inputString = item.dt_txt.time;
        const timeComponents = inputString.split(":");
        const hour = timeComponents[0];
        return `${(hour % 12) || 12} ${hour >= 12 ? 'PM' : 'AM'}`;
    });
    return (
        <div className=' my-2 media-scroll text-center'>
            {hours.map((hour, index) => (
                <div key={index} className='mx-1  media-item'>
                    <h6 style={{ fontSize: 15 }}>{hour}</h6>
                    <img src={`https://openweathermap.org/img/wn/${map[index].weather[0].icon}.png`} alt="icon" />
                    <p>{temp[index]}°C</p>
                </div>
            ))}
        </div>
    )
}