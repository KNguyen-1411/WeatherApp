import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
const StateContext = createContext();

const setData = (data) => {
    const dateH = new Date();
    const currentHour = dateH.getHours();
    const currentDay = dateH.getDay();
    let hh = currentHour;
    let hour = 1;
    let day = 0;
    data.list.forEach((item) => {
        const abc = {
            "day": null,
            "time": null,
            "date": null
        }
        let date = new Date(item.dt_txt);
        if (hh + hour >= 24) {
            day++;
            hour = 0;
            hh = 0;
        }
        const dayNames = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
        date.setHours(hh + hour);
        abc.day = dayNames[(currentDay + day) % 7];
        abc.time = date.getHours() + ":00:00";
        const temp = new Date();
        temp.setDate(temp.getDate() + day);
        abc.date = `${temp.getDate()}/${temp.getMonth() + 1}/${temp.getFullYear()}`;
        hour += 3;
        item.dt_txt = abc;
    });
    data.list.forEach((item) => {
        item.main.temp = Math.round(item.main.temp);
        item.main.temp_min = item.main.temp_min.toFixed(1);
        item.main.temp_max = item.main.temp_max.toFixed(1);
    });

    return data;
}
const setWtdata = (data) => {
    data.main.temp = Math.round(data.main.temp);
    data.main.temp_min = data.main.temp_min.toFixed(1);
    data.main.temp_max = data.main.temp_max.toFixed(1);
    data.main.feels_like = Math.round(data.main.feels_like);
}

export const StateContextProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [weather, setWeather] = useState(null);
    const [list, setList] = useState([]);
    const [place, setPlace] = useState('Huế');
    const [location, setLocation] = useState('');

    const fetchWeather = useCallback(async () => {
        try {
            const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
            const baseWT = 'https://api.openweathermap.org/data/2.5/weather';
            const apiKey = 'd24f59f8ce4d5028b46e8579340869e1';
            const language = 'vi';
            const units = 'metric';
            const url = `${baseUrl}?appid=${apiKey}&lang=${language}&units=${units}&q=${place}`;
            const urlWT = `${baseWT}?appid=${apiKey}&lang=${language}&units=${units}&q=${place}`;
            const response = await axios.get(url);
            const responseWT = await axios.get(urlWT);
            const data = response.data;
            const dataWT = responseWT.data;

            setData(data);
            setWtdata(dataWT);
            setWeather(dataWT);
            setWeatherData(data);
            setList(data.list);
            setLocation(data.city.name);
            //show data
            console.log(dataWT);
            console.log(data);
        } catch (e) {
            console.error('Error fetching weather data:', e);
            alert('Không tìm thấy địa chỉ bạn nhập');
        }
    }, [place])

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    return (
        <StateContext.Provider value={{
            weatherData,
            weather,
            setPlace,
            list,
            location,
            place
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);