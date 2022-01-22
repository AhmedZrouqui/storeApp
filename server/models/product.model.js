const helpers = require('./mongoose.helper');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = {
    name: {
        type: String,
        required: true,
        minlength: 5,
    },
    description: {
        type: String,
        required: false,
        minlength: 5,
    },
    price: {
        type: Schema.Types.Decimal128,
        required: true,
    },
    stockQuantity: {
        type: Number,
        required: true,
    }
};


const productSchema = helpers.createModelSchema(schema)
module.exports = helpers.exportModule('Product', productSchema)