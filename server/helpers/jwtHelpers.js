const jwt = require("jsonwebtoken");

const sign = (props) => {
    const {id, email, username} = props;

    return jwt.sign(
        {
            userId : id,
            email: email,
            username: username
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: "2h"
        }
    )
}


const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader === 'undefined')
        res.status(403).send("Unauthorized");

    req.token = bearerHeader.split(' ')[1]
    next()
}

const verify = (token, res ,req, payload) => {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
        if(err) res.status(err).send("Unauthorized")

        res.status(200).json({
            payload
        })
    })
}

module.exports = {sign, verifyToken, verify}