const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function (req, res) {
    controller.addUser(req.body.name)
        .then(data => response.success(req, res, data, 201, 'se creo un user OK'))
        .catch((e) => response.error(req, res, "Internal error", 500, e))
})

router.get('/', function (req, res) {
    controller.getUser()
        .then((userList) => {response.success(req, res, userList, 200)})
        .catch((e) => {response.error(req, res, "Unexpected Error", 500, e)})
})

module.exports = router