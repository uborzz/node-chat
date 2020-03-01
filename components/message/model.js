const mongoose = require('mongoose');

// el flujo seria crear un schema para una collection y crear el model.
const Schema = mongoose.Schema;

// mods skema interrelacionando entidades

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    date: Date,
    file: String,
});

// params: (1) collection name in mongo y (2) schema
const model = mongoose.model('Message', mySchema);

module.exports = model;