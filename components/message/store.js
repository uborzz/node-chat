const Model = require('./model');

function addMessage(message) {
    const msg = new Model(message)
    return msg.save().then(saved_msg => {
        console.log(saved_msg)
        const populated_msg = saved_msg
            .populate('user')
            .execPopulate()
        return populated_msg
    })
}

function getMessage(filterUser) {
    return new Promise((resolve, reject) => {
        let filters = {}
        if (filterUser) {
            filters["user"] = filterUser
        }
        Model.find(filters)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error)
                    return false
                }
                resolve(populated)
            })
            // .catch(e => {reject(e)}); // con el populate y exec
            // se keda como promesa interna y no se usa este catch.
    })
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({_id: id})
    foundMessage.message = message;
    updatedMessage = await foundMessage.save();
    return updatedMessage
}

async function removeMessage(id) {
    return Model.deleteOne({_id: id}) // devuelve una promesa.
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage,
    // get
    // update
    // delete
}