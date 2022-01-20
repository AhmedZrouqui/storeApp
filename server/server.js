const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
try{
    mongoose.connection.once('open', () => {
        console.log("MONGODB database connected successfully");
    })
}catch(e){
    console.log(e)
}

const usersRouter = require('./routes/users');

app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})