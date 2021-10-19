const mongoose = require('mongoose');

const product = mongoose.Schema({
    productName: String,
    price: Number,
    rating: Number,
    offer: String,
    seller: String,
    discription: String,
    image: String,
    catagory: String,
    stock: {
        type: String,
        default: 'In Stock',
    },
});

const products = mongoose.model('product', product);

module.exports = products;
