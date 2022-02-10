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
    image: {
        type: String,
        required: false,
    },
    discount: {
        type: Schema.Types.Decimal128,
        required: false,
    },
    quantity: {
        type: Number,
        required: true,
    },
    category: [
        {type: Schema.Types.ObjectId, required: false, ref: 'Category'}
    ],
    brand: {
        type: Schema.Types.ObjectId, 
        required: false, 
        ref: 'Brand'
    }
    
};


const productSchema = helpers.createModelSchema(schema)
module.exports = helpers.exportModule('Product', productSchema)