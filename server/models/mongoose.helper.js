const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createModelSchema = (schema) => {
    return new Schema(schema, {timestamps: true})
}

const exportModule = (model, schema) => {
    return mongoose.model(model, schema)
}
module.exports = {createModelSchema, exportModule}