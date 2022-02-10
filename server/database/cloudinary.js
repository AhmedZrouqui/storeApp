const cloudinary = require('cloudinary').v2

const {
    CLOUDINARY_CLOUDNAME,
    CLOUDINARY_APIKEY,
    CLOUDINARY_APISECRET
} = process.env

cloudinary.config({ 
    cloud_name: CLOUDINARY_CLOUDNAME, 
    api_key: CLOUDINARY_APIKEY, 
    api_secret: CLOUDINARY_APISECRET 
});

module.exports = {cloudinary}