const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require("jsonwebtoken");
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
    try{
        const _user = req.body


        if (!(_user.username && _user.email && _user.password && _user.firstName && _user.lastName)) {
            res.status(400).send("All input is required")
        }

        const existingUser = await User.findOne({email: _user.email})

        if(existingUser){
            res.status(409).send("User already exists, please login!")
        }

        const user = new User(_user);

        user.token = jwt.sign(
            { userId : user._id, email:_user.email},
            process.env.TOKEN_SECRET,
            {
                expiresIn: "2h"
            }
        )

        user.save()
            .then((user) => res.status(200).json(user))
            .catch((err) => res.status(400).json('Error: ' + err));
    }catch(err) {
        console.log(err)
    }
});

router.route('/auth').get((req, res) =>{
    const {id, email, username, password} = req.body;

    const filter = email ?
        {email: email} :
        {username: username}

    const token = jwt.sign(
        { userId : id, email: email},
        process.env.TOKEN_SECRET,
        {
            expiresIn: "2h"
        }
    )

    User.findOneAndUpdate(filter, {token: token})
        .then((user) => {
            user.comparePassword(password, function(err, isMatch){
                if(err) throw err

                user.token = token

                res.json({
                    'status' : isMatch,
                    'data' : isMatch ? user : null,
                })
            });
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update').post(async (req, res) =>{
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