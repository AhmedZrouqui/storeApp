const router = require('express').Router();
let User = require('../models/user.model');

router.route('/list').get((req,res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {

    const user = new User(req.body);

    user.save()
        .then(() => res.json('User added successfully!'))
        .catch((err) => res.status(400).json('Error: ' + err));
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



router.route('/remove').post((req, res) => {
    const {id} = req.body

    User.findByIdAndDelete(id)
        .then(() => res.json({'status': "success"}))
        .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router;