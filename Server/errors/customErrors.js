class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

class ValidationError extends CustomError {
    constructor(message) {
        super(message, 400);
    }
}

class NotFoundError extends CustomError {
    constructor(message) {
        super(message, 404);
    }
}

module.exports = { CustomError, ValidationError, NotFoundError };