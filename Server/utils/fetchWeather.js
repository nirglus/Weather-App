const axios = require('axios');

const fetchWeather = async(city, apiKey) =>{
    const baseURL = process.env.API_BASE_URL;
    const url = `${baseURL}/current.json?key=${apiKey}&q=${city}`;
    const res = await axios.get(url);
    return res.data;
}

module.exports = { fetchWeather };