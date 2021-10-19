const product = require("../model/products");
const { config } = require("dotenv");
config();

const search = async (req, res, next) => {
  const imageBaseUrl = process.env.URL_staticfiles;

  try {
    const data = await product
      .find({ productName: { $regex: req.body.search, $options: "i" } })
      .lean();
    if (data[0]) {
      for (let i in data) {
        let imageName = data[i].image;
        data[i].image = imageBaseUrl + imageName;
      }
      res.status(200).send(data);
    } else {
      res.send("no match found");
    }
    console.log(data);
  } catch (error) {
    res.send(error);
  }
};

module.exports = search;
