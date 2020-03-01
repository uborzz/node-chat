const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    // array asociativo, cada chat tendra una serie de user ids.
    users: [
        {
            type: Schema.ObjectId,
            ref: 'User',
        }
    ]
})

const model = mongoose.model('Chat', mySchema)

module.exports = model