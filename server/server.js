require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { API_PORT } = process.env
const app = express();
const port = process.env.PORT || API_PORT;

require("./database/config").connect()

app.use(cors());
app.use(express.json());

const usersRouter = require('./routes/users');
const cartItemsRouter = require('./routes/cartItem')
const cartsRouter = require('./routes/cart')

app.use('/user', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

//TODO: check https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/