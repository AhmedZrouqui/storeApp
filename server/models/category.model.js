const helpers = require("./mongoose.helper");

const schema = {
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
}

const categorySchema = helpers.createModelSchema(schema)
module.exports = helpers.exportModule('Category', categorySchema)