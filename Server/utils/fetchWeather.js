const axios = require('axios');
const { NotFoundError } = require('../errors/customErrors');

const fetchWeather = async (city, apiKey) => {
    const baseURL = process.env.API_BASE_URL;
    const url = `${baseURL}/current.json?key=${apiKey}&q=${city}`;
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            throw new NotFoundError('City not found');
        }
        throw new Error('Error fetching weather data');
    }
};

module.exports = { fetchWeather };