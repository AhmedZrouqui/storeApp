const helpers = require('./mongoose.helper')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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