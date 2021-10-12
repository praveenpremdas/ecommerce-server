const { config } = require("dotenv");
config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.ConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(`${error} did not connect`));
