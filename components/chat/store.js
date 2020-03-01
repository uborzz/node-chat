const Model = require('./model');


function createChat(users) {
    const chat = new Model(users)
    return chat.save().then(saved_chat => {
        saved_chat
            .populate('users')
            .execPopulate()
    })
}

function listChats(userId) {
    return new Promise((resolve, reject) => {
        let filters = {}
        if (userId) {
            filters = {users: userId}
        }
        Model.find(filters)
            .populate('users')
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

module.exports = {
    list: listChats,
    add: createChat,
}