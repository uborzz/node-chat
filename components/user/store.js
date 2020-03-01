const Model = require('./model')

function addUser(name) {
    const myUser = new Model(name);
    return myUser.save();
}

function getUser() {
    return Model.find();
    
}

module.exports = {
    add: addUser,
    list: getUser,
}