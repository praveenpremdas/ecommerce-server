const { config } = require('dotenv');
const products = require('../model/products');
config();

const viewAllProducts = async (req, res, next) => {
    try {
        const data = await products.find().lean();
        const imageBaseUrl = process.env.URL_staticfiles;
        console.log(data);
        for (let i in data) {
            let imageName = data[i].image;
            data[i].image = imageBaseUrl + imageName;
        }
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

module.exports = viewAllProducts;
