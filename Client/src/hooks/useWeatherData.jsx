import { useState, useCallback } from "react";
import axios from "axios";

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (city) => {
    if (city.trim()) {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${apiUrl}/${city}`);
        setWeatherData(res.data);
        console.log(res.data);

        setError(null);
      } catch (err) {
        setWeatherData(null);
        setError(err.response?.data?.error || "Error fetching weather data");
      }
    } else {
      setError("City name cannot be empty");
    }
  }, []);

  return { weatherData, error, fetchWeather };
};

export default useWeatherData;
