const helpers = require('./mongoose.helper')
const bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

//TODO: add more user attributes

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
    }
};

const userSchema = helpers.createModelSchema(schema)

userSchema.pre('save', function(next){
    let user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = helpers.exportModule('User', userSchema)