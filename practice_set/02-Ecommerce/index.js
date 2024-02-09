require('dotenv').config()
const express = require('express');
const server = express();
const routerproduct = require('./routes/product')
const routeruser = require('./routes/user')
//bodyParser
server.use(express.json());
server.use(express.static('public'));
// const products = require('./routes/product')
server.use('/products',routerproduct.router)
server.use('/users',routeruser.userrouter)

server.listen(8080, () => 
  console.log('server started'));
  console.log('password: ', process.env.DB_Password)
