const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

// params: (1) collection name in mongo y (2) schema
const model = mongoose.model('User', mySchema);

module.exports = model;