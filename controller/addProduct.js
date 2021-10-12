const product = require("../model/products");
const multer = require("multer");
let imageName = "";
const { config } = require("dotenv");
config();

const imageStorage = multer.diskStorage({
  destination: "images", // Destination to store image
  filename: (req, file, cb) => {
    imageName = file.fieldname + "_" + Date.now() + file.originalname;
    req.body.imageAddress = process.env.URL_staticfiles + imageName;

    cb(null, imageName); // file.fieldname is name of the field (image) ,path.extname get the uploaded file extension
  },
});

const upload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 8000000, // 1000000 Bytes = 8 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

const uploadImage = upload.single("image");

const addProduct = async (req, res, next) => {
  try {
    productDetails = req.body;

    const data = await product.create({
      productName: productDetails.productName,
      price: productDetails.price,
      rating: productDetails.rating,
      offer: productDetails.offfers,
      seller: productDetails.seller,
      discription: productDetails.productDiscription,
      image: productDetails.imageAddress,
      catagory: productDetails.catagory,
      stock: productDetails.stock,
    });
    res.status(201).send(productDetails.imageAddress);
  } catch (error) {
    console.log(error);
    res.status(409).send("Failed to add product" + error);
  }
};

module.exports = { addProduct, uploadImage };
