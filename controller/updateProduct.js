const product = require('../model/products');

const updateProduct = async (req, res, next) => {
    try {
        const productDetails = await product.findOne({
            _id: req.body._id,
        });

        const data = await product.updateOne(
            { _id: req.body._id },
            {
                productName: req.body.productName
                    ? req.body.productName
                    : productDetails.productName,
                price: req.body.price ? req.body.price : productDetails.price,
                rating: req.body.rating
                    ? req.body.rating
                    : productDetails.rating,
                seller: req.body.seller
                    ? req.body.seller
                    : productDetails.seller,
                discription: req.body.productDiscription
                    ? req.body.productDiscription
                    : productDetails.discription,
                catagory: req.body.catagory
                    ? req.body.catagory
                    : productDetails.catagory,
                stock: req.body.stock ? req.body.stock : productDetails.stock,
                image: req.body.imageName
                    ? req.body.imageName
                    : productDetails.image,
            }
        );
        res.status(200).send('sucess');
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    updateProduct,
};
