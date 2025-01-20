const mongoose = require("mongoose");

const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://sajinsajigeorge:3D2h3Z0Nc0ZDkp84@cluster0.nnwqb.mongodb.net/")
       console.log("MongoDB connection SUCCESS");
    }catch (error){
        console.error(error.message);
    }
};

module.exports = connectDB;



