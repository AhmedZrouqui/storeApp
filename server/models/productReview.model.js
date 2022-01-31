const Schema = require('mongoose')
const helpers = require("./mongoose.helper");


const schema = {
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: true,
    },
    content:{
        type: String,
        required: false
    }
}

const productReviewSchema = helpers.createModelSchema(schema)
module.exports = helpers.exportModule('ProductReview', productReviewSchema)