const router = require('express').Router();
let CartItem = require('../models/cartItem.model');
let Product = require('../models/product.model');

router.route('/insert').post(async (req, res) => {
    const {productId, quantity} = req.body

    if(quantity <= 0) res.status(400).send("Quantity should be greater than zero");

    const product = await Product.findOne({_id: productId})

    if(!product) res.status(400).send("Product not found!")
    const cartItem = new CartItem({
        product: productId,
        quantity: quantity
    })

    cartItem.save()
        .then(() => res.status(200).send("Inserted successfully!"))
        .catch((err) => res.status(400).json("Error" + err))
})