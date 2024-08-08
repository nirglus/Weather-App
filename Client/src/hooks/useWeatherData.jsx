import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherData = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city.trim() === '') { 
      setWeatherData(null);
      setError('City name is required');
      return;
    }

    const fetchWeather = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL; 
        const res = await axios.get(`${apiUrl}/${city}`);
        setWeatherData(res.data);
        setError(null);
      } catch (err) {
        setWeatherData(null);
        setError(err.res?.data?.error || 'Error fetching weather data');
      }
    };

    fetchWeather();
  }, [city]);

  return { weatherData, error, setCity };
};

export default useWeatherData;