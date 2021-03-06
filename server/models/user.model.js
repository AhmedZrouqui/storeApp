const helpers = require('./mongoose.helper')
const bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

const schema = {
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    password:{
        type:String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    token: {
        type: String
    }
};

const userSchema = helpers.createModelSchema(schema)

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = helpers.exportModule('User', userSchema)