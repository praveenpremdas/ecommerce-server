const router = require('express').Router();
const register = require('../controller/authRegistration');
const { validate, validation } = require('../middleware/authRegistration');
const { validateLogin, loginValidation } = require('../middleware/authlogin');
const login = require('../controller/authLogin');

router.post('/register', validate(), validation, register);
router.post('/login', validateLogin(), loginValidation, login);

module.exports = router;
