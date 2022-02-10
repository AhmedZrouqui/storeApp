const router = require('express').Router();
const Product = require('../models/product.model');
const Category = require('../models/category.model')
const {cloudinary} = require('../database/cloudinary')

router.route('/find').get((req, res) => {
    const {id} = req.body

    Product.findOne({id: id})
        .limit(1)
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/list').get((req, res) => {
    Product.find()
        .then((products) => res.status(200).json(products))
        .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/addOne').post(async (req, res) => {
    try{
        const _product = req.body

        const cdn = await cloudinary.uploader
                            .upload(_product.image, {
                                upload_preset : "product_images"
                            })
        const category = await Category.findOne({title: _product.category})

        _product.image = cdn.secure_url
        _product.category = category._id
        console.log(_product)

        const product = new Product(_product)

        product.save()
            .then((product) => res.status(200).json(product))
            .catch((err) => res.status(400).json('Error: ' + err));
    } catch(err){
        console.error(err)
        res.status(400).json({err: "something went wrong."})
    }
})

router.route('/add').post((req, res) => {
    const _products = req.body

    Product.insertMany(_products)
        .then((products) => res.status(200).json(products))
        .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/homeList').get(async (req, res) => {

    
    try{
        const womenCategory = await Category.find({title: "women"}).limit(1)
        const menCategory = await Category.find({title: "men"}).limit(1)

        const women = await Product.find({category: womenCategory}).limit(6);
        const men = await Product.find({category: menCategory}).limit(6);
        
        res.status(200).json({...women, ...men})
    } catch(err){
        console.error("error: "+err);
        res.status(400).json({error: "Something went wrong."})
    }
})

module.exports = router