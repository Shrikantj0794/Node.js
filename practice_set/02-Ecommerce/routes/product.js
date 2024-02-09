const express = require('express');
const productcontroller = require('../controller/product')
const router = express.Router();

router
    .post('/', productcontroller.createproduct)
    .get('/', productcontroller.readproduct)
    .get('/:id',productcontroller.readproductnowise )
    .put('/:id',productcontroller.updateproduct )
    .patch('/:id', productcontroller.replaceproduct)
    .delete('/:id', productcontroller.deleteproduct)

exports.router = router