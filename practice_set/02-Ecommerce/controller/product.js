const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;



// this is controller 

exports.createproduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
  }
// Read GET /products
exports.readproduct = (req, res) => {
    res.json(products);
  }
// Read GET /products/:id
exports.readproductnowise = (req, res) => {
    const id = +req.params.id;
    const product = products.find(p=>p.id===id)
    res.json(product);
  }
// Update PUT /products/:id
exports.updateproduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.status(201).json();
  }
  // Update PATCH /products/:id
  exports.replaceproduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json();
  }
// Delete DELETE /products/:id
exports.deleteproduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1)
    res.status(201).json(product);
  }
