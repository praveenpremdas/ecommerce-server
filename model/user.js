const mongoose = require('mongoose');

const user = mongoose.Schema({
    name: String,
    phoneNumber: Number,
    email: String,
    password: String,
    date: { type: Date, default: Date.now },
});

const users = mongoose.model('user', user);
module.exports = users;
