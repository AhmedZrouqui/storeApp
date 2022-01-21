const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require("jsonwebtoken");

router.route('/list').get((req,res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error: ' + err));
});

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

router.route('/addMany').post((req, res) => {
    //TODO: add multiple users at once
})

router.route('/auth').get((req, res) =>{
    const {username, password} = req.body;

    User.findOne({username: username})
        .then((user) => {

            user.comparePassword(password, function(err, isMatch){
            if(err) throw err

            res.json({
                'status' : isMatch,
                'data' : isMatch ? user : null,
            })
        });
    })
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) =>{
    const {id, user} = req.body
    User.updateOne({id: id},
        {username: user.username, password: user.password})
        .then(() => res.json({'status': 'success'} ))
        .catch((err) => res.status(400).json('Error: ' + err));
})



router.route('/remove').post(async (req, res) => {
    const _user = req.body

    const user = await User.findOne({email: _user.email})
    if (!user) res.status(409).json('User doesn\'t exist, please try again with a valid user!')

    await Object(_user).keys.map(attr => user.attr = _user.attr)
    
    user.save()
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json('Error: ' + err))
    /*
    User.findByIdAndDelete(id)
        .then(() => res.json({'status': "success"}))
        .catch((err) => res.status(400).json('Error: ' + err))
     */
})

module.exports = router;