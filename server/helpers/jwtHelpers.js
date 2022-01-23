const jwt = require("jsonwebtoken");

const sign = (user) => {

    return jwt.sign({user: user},
        process.env.TOKEN_SECRET,
        {
            expiresIn: "1h"
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

const verify = (req, res, next) => {
    try{
        const token = req.headers['authorization']
        req.userData = jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    }catch(err){
        return res.status(401).json({
            message:'Unauthorized!',
        })
    }

}

module.exports = {sign, verifyToken, verify}