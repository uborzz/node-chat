const express = require('express');
const multer = require('multer')

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

// se prepara la variable del multer, q guarda el fichero a disco.
const upload = multer({
    dest: 'public/files/',
}) // se configura como midleware express en el post.

router.get('/', function (req, res) {
    const filterUser = req.query.user || null

    controller.getMessages(filterUser)
        .then((messageList) => {response.success(req, res, messageList, 200)})
        .catch((e) => {response.error(req, res, "Unexpected Error", 500, e)})
})

// multer con el single (un solo archivo y el nombre file (campo del json multipart a enviar))
router.post('/', upload.single('file'), function (req, res) {
    console.log(req.file)
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    // se queda con el midleware el file en req.file
        .then((fullMessage) => response.success(req, res, fullMessage, 201, 'se creo un mensaje OK'))
        .catch((e) => response.error(req, res, "Informacion Invalida: ", 401, e))
})

// [PATCH/POST/PUT]         (param) (query)
// > localhost:3000/message/123/321?num=232 
// \__ (body) inside
// ------------------------------------- Example --------
// router.patch('/:param1/:param2', function (req, res) {
//     console.log(req.params)
//     console.log(req.query)
//     console.log(req.body)})

router.patch('/:id', function (req, res) {
    controller.updateText(req.params.id, req.body.message)
        .then((updatedMessage) => response.success(req, res, updatedMessage, 200, 'se actualizo el mensaje.'))
        .catch((e) => response.error(req, res, "Informacion Invalida", 500, e))
})

router.delete('/:id', function (req, res) {
    let id = req.params.id
    controller.deleteMessage(id)
        .then(() => response.success(req, res, `usuario ${id} eliminado`, 200))
        .catch((e) => response.error(req, res, 'Error interno', 500, e))
})

module.exports = router;
