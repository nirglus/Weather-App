const { Router } = require("express");
const { getWeather } = require("../controllers/weather.controller");
const router = Router();

router.get("/:city", getWeather);

module.exports = router;