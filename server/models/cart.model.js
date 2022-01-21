const helpers = require('./mongoose.helper')
const Schema = require('./mongoose.schema')

const schema = {
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    cartItems:[
        {
            type: Schema.Types.ObjectId,
            ref: 'CartItem',
            required: true
        }
    ]
};
const cartSchema = helpers.createModelSchema(schema)
module.exports = helpers.exportModule('Cart', cartSchema)