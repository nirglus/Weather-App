const { fetchWeather } = require("../utils/fetchWeather");

const getWeather = async (req, res) => {
    const city = req.params.city;
    try {
        const apiKey = process.env.API_KEY; 
        const data = await fetchWeather(city, apiKey);
        res.send(data);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = { getWeather }