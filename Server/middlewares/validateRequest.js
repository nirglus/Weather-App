const { ValidationError } = require('../errors/customErrors');

const validateRequest = (req, res, next) => {
    const city = req.params.city;

    if (!city) {
        return next(new ValidationError('City name is required'));
    }

    const cityRegex = /^[a-zA-Z\s-]+$/;
    if (!cityRegex.test(city)) {
        return next(new ValidationError('Invalid city name'));
    }
    next();
};
module.exports = { validateRequest };