const mongoose = require('mongoose');

const review = mongoose.Schema({
    productId: String,
    image: String,
    userName: String,
    rating: Number,
    discription: String,
});

const review = mongoose.model('review', review);

module.export = review;
