const helpers = require('./mongoose.helper')

//TODO: add more user attributes

const schema = {
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
};

const userSchema = helpers.createModelSchema(schema)
module.exports = helpers.exportModule('User', userSchema)