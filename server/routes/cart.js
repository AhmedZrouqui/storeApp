const router = require('express').Router();
let Cart = require('../models/cart.model');
let User = require('../models/user.model')

router.route('/get').get(async (req, res) => {
    const {uId} = req.body

    const user = await User.findOne({_id: uId})
    if(!user) res.status(400).send("User not found!")

    Cart.find({userId: uId})
        .then((items) => res.status(200).json(items))
        .catch((err) => res.status(400).json("Error: "+ err))
})

