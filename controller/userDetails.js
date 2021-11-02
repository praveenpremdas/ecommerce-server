const users = require('../model/user');

const userDetails = async (req, res, next) => {
    try {
        const data = await users.findOne({ _id: req.body.id });
        if (data) {
            res.status(201).send(data);
        } else {
            res.status(400).send('No User With This _id found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

module.exports = userDetails;
