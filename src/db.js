const mongoose = require("mongoose")
require('dotenv').config();

const uri = "mongodb+srv://" + process.env.USER + ":" + process.env.PASSWORD + "@cluster0.y6gqako.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=> console.log('DB connected'))
      .catch((err)=> console.log(err));
  }
  module.exports = connectDB
