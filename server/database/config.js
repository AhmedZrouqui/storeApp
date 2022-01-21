const mongoose = require('mongoose');

const {MONGO_URI} = process.env

exports.connect = () => {
    mongoose.connect(MONGO_URI)
        .then((r) =>{
            console.log("MONGODB database connected successfully")
        })
        .catch((err) => {
            console.log("database connection failed.")
            console.error(err);
            process.exit(1)
        });
}