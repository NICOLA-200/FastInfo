const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const adminUser = require("./routes/adminUser");
const cors = require("cors");
const companyRoute = require('./routes/companyRoute');
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary")

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use( '/company', companyRoute);
app.use("/api/auth", adminUser);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});