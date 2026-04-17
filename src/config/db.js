const mongoose = require("mongoose");



// MongoDB Connection
async function ConnectDB(){

    mongoose.connect("mongodb://127.0.0.1:27017/backendClassDB")
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((err) => {
        console.log("Database connection error", err);
    });
    
}

module.exports = ConnectDB;

