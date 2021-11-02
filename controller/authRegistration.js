const users = require('../model/user');
const crypto = require('crypto');

const register = async (req, res, next) => {
    console.log('test');
    try {
        const password = crypto
            .createHmac('sha256', 'werfghjk99oijhbv34567885@#$')
            .update(req.body.password)
            .digest('hex');
        const data = await users.create({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            password: password,
        });
        res.status(201).send('sucess');
    } catch (error) {
        console.log(error);
        res.status(500).send('error');
    }
};

module.exports = register;
