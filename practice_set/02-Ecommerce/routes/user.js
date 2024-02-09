const express = require('express');
const usercontroller = require('../controller/users')
const router = express.Router();

router
    .post('/', usercontroller.createuser)
    .get('/', usercontroller.readpusers)
    .get('/:id',usercontroller.readusernowise )
    .put('/:id',usercontroller.updateuser )
    .patch('/:id', usercontroller.replaceuser)
    .delete('/:id', usercontroller.deleteuser)

exports.userrouter = router