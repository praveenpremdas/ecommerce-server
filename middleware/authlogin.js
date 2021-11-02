const { body, validationResult } = require('express-validator');

const validateLogin = () => {
    return [
        body('email')
            .isEmail()
            .withMessage('Invalid Email')
            .notEmpty()
            .withMessage('Email cannot not be empty'),
        body('password')
            .isAlphanumeric()
            .withMessage('Invalid Password')
            .notEmpty()
            .withMessage('Password cannot not be empty'),
    ];
};

const loginValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    } else {
        return res.status(422).send({ errors: errors.array() });
    }
};

module.exports = {
    validateLogin,
    loginValidation,
};
