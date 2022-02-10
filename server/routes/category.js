const router = require('express').Router();
const Category = require('../models/category.model');

router.route('/add').post((req, res) => {
    try{
        const _category = req.body
        const category = new Category(_category);

        category.save()
            .then((category) => res.status(200).json(category))
            .catch((err) => res.status(400).json({message: "Error while creating category, please try again.", error: err}))

    } catch(err){
        console.error("Error: "+err)
        res.status(400).json({error: "Something went wrong."})
    }
})

router.route('/addMany').post((req, res) => {
    try{
        const _categories = req.body

        Category.insertMany(_categories)
            .then((categories) => res.status(200).json(categories))
            .catch((err) => res.status(400).json({message: "Error while creating category, please try again.", error: err}))

    } catch(err){
        console.error("Error: "+err)
        res.status(400).json({error: "Something went wrong."})
    }
})

router.route('/list').get((req, res) => {
    try{
        Category.find()
        .then((categories) => res.status(200).json(categories))
        .catch((err) => res.status(400).json({message: "Error while creating category, please try again.", error: err}))
    } catch(err){
        console.error("Error: "+err)
        res.status(400).json({error: "Something went wrong."})
    }
})

module.exports = router