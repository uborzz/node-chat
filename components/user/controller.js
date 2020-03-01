const store = require('./store')

function addUser(name) {
    if (!name) {
        // truki: devolvemos una promesa directamente rechazada.
        return Promise.reject('Invalid name')
    }

    const user = {
        name,
    }

    return store.add(user)
}

function getUser() {
    return store.list()    
};

module.exports = {
    addUser,
    getUser,
}