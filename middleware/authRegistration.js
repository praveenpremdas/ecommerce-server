const { body, validationResult } = require('express-validator');

const validate = () => {
    return [
        body('name')
            .isAlpha()
            .withMessage('Name should contain alphabet only')
            .notEmpty()
            .withMessage('Name cannot not be empty'),
        body('phoneNumber')
            .isNumeric()
            .withMessage('Phone Number should contain Numbers only')
            .notEmpty()
            .withMessage('Phone Number cannot not be empty'),
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

const validation = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    } else {
        return res.status(422).send({ errors: errors.array() });
    }
};

module.exports = {
    validate,
    validation,
};
