const store = require('./store')

function createChat(users) {
    if (!users || !users.length) {
        console.error('faltan datos')
        reject('Los datos son incorrectos')
        return false
    }
    
    const chat = {
        users: users,
        date: new Date(),
    };

    return store.add(chat)
}

function getChats(userId) {
    return new Promise((resolve, reject) => {
        resolve(store.list(userId))
    })    
}

module.exports = {
    createChat,
    getChats,
}