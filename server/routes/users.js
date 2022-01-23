const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require('../helpers/jwtHelpers')
const bcrypt = require("bcrypt");

router.route('/list').get((req,res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/find').get((req, res) => {
    const {email} = req.body

    User.findOne({email: email})
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/register').post(async (req, res) => {
    const _user = req.body


    if (!(_user.username && _user.email && _user.password && _user.firstName && _user.lastName)) {
        res.status(400).send("All input is required")
    }

    const existingUser = await User.findOne({email: _user.email})

    if(existingUser){
        res.status(409).send("User already exists, please login!")
    }

    const salt = bcrypt.genSaltSync(10),
        hash = bcrypt.hashSync(_user.password, salt);

    const user = new User(_user);

    user.token = await jwt.sign(user)
    user.password = hash

    user.save()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/auth').post(async (req, res) =>{
    const {username, password} = req.body;

    const user = await User.find({username: username})

    if(!user) res.status(400).send("User not found");

    const token = jwt.sign(user)

    User.findOne({username: username})
        .then((user) => {
            user?.comparePassword(password, function(err, isMatch){
                if(err) res.status(400).send("password mismatch");

                res.json({
                    'status' : isMatch,
                    'data' : isMatch ? user : null,
                    ...(isMatch && {'token': token })
                })
            });
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update').post(jwt.verify, async (req, res) =>{
    const _user = req.body
    let salt = null,
        hash = null;
    if(_user.user.password){
        salt = bcrypt.genSaltSync(10);
        hash = bcrypt.hashSync(_user.user.password, salt);

        _user.user.password = hash
    }

    User.findByIdAndUpdate(_user.id,_user.user)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json(err))
})



router.route('/remove').post(async (req, res) => {
    const {id} = req.body

    User.findByIdAndDelete(id)
        .then(() => res.status(200).json({'status': "success"}))
        .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router;