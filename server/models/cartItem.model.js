const helpers = require('./mongoose.helper')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = {
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    }
};
const cartItemSchema = helpers.createModelSchema(schema)
module.exports = helpers.exportModule('CartItem', cartItemSchema)