const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const user = new User(req.body);

    user.save()
        .then(() => res.json('User added successfully!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/remove').post((req, res) => {
    //TODO:add remove function
})

module.exports = router;