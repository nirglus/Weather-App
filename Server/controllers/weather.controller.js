const { fetchWeather } = require("../utils/fetchWeather");

const getWeather = async (req, res, next) => {
    const city = req.params.city;
    try {
        const apiKey = process.env.API_KEY;
        const data = await fetchWeather(city, apiKey);
        res.send(data);
    } catch (err) {
        next(err);
    }
};

module.exports = { getWeather };