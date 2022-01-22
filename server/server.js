require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { API_PORT } = process.env
const app = express();
const port = process.env.PORT || API_PORT;
const usersRouter = require('./routes/users');
const cartItemsRouter = require('./routes/cartItem')
const cartsRouter = require('./routes/cart')

require("./database/config").connect()

app.use(cors());
app.use(express.json());

app.use('/user', usersRouter);
app.use('/cartItem', cartItemsRouter);
app.use('/cart', cartsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

//TODO: check https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/