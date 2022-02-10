const helpers = require('./mongoose.helper')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = {
    name : {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    }
};
const brandSchema = helpers.createModelSchema(schema)
module.exports = helpers.exportModule('Brand', brandSchema)