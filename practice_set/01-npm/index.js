const express = require('express');
const server = express();
server.use(express.json());
const controllerProducts = require('./controller/product')


server 
  .post('/products', controllerProducts.CreateProduct)
  .get('/products/:id', controllerProducts.ReadProduct)
  .put('/products/:id', controllerProducts.ReplaceProduct)
  .patch('/products/:id', controllerProducts.UpdateProduct)
  .delete('/products/:id', controllerProducts.DeleteProduct);


server.listen(8080, () => {
  console.log('server started');
});