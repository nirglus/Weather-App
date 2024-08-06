const getWeather = async(req, res) =>{
    res.send("Got weather");
}

module.exports = { getWeather }