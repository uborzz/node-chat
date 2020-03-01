const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();


router.post('/', function (req, res) {
    console.log(req.body.users)
    controller.createChat(req.body.users)
        .then((chat) => response.success(req, res, chat, 201, 'se creo un chat OK'))
        .catch((e) => response.error(req, res, "Informacion Invalida", 500, e))
})


router.get(['/:userId', '/'], function (req, res) {
    let filterById = req.params.userId
    console.log("Filters: " + filterById)
    controller.getChats(filterById || null)
        .then((chats) => {response.success(req, res, chats, 200)})
        .catch((e) => {response.error(req, res, "Unexpected Error", 500, e)})
})

module.exports = router;