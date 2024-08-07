const { Router } = require("express");
const { getWeather } = require("../controllers/weather.controller");
const { validateRequest } = require("../middlewares/validateRequest");
const router = Router();

router.get("/:city", validateRequest ,getWeather);

module.exports = router;