const users = require('../model/user');
const crypto = require('crypto');

const login = async (req, res, next) => {
    try {
        const password = crypto
            .createHmac('sha256', 'werfghjk99oijhbv34567885@#$')
            .update(req.body.password)
            .digest('hex');
        const data = await users.findOne({
            password: password,
            email: req.body.email,
        });
        if (data) {
            res.status(200).send(data._id);
        } else {
            res.status(401).send('No User Found');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports = login;
