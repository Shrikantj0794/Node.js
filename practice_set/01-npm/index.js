const express = require('express');
const server = express();
server.use(express.json());
const controllerProducts = require('./controller/product')


// Create
server.post('/products', controllerProducts.CreateProduct);
// Read
server.get('/products/:id', controllerProducts.ReadProduct);
// Update
server.put('/products/:id', controllerProducts.ReplaceProduct);
//patch
server.patch('/products/:id', controllerProducts.UpdateProduct);
// Delete
server.delete('/products/:id', controllerProducts.DeleteProduct);


server.listen(8080, () => {
  console.log('server started');
});