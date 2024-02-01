const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express');
const server = express();
server.use(express.json());


// server.use((req, res, next) => {

// const auth = (req, res, next) => {
  // console.log(req.query);

  // if (req.body.password == '123') {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
  // next()
 
// };

// API - Endpoint - Route
server.get('/products', (req, res) => {
  res.json(products)
});
server.post('/', (req, res) => {
  res.json({ type: 'POST' });
});
server.put('/', (req, res) => {
  res.json({ type: 'PUT' });
});
server.delete('/', (req, res) => {
  res.json({ type: 'DELETE' });
});
server.patch('/', (req, res) => {
  res.json({ type: 'PATCH' });
});

// C R U D

// Create
server.post('/products', (req, res)=>{
  console.log(req.body)
  products.push(req.body)
  res.json({ type: 'POST' })
})
// Read
server.get('/products/:id', (req, res) => {
  const id = +req.params.id;
  const product = products.find(p=>p.id===id)
  res.json(product);
});
// Update
server.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  products.splice(productIndex,1,{...req.body, id:id})
  res.json('data updated');
});
//patch
server.patch('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  const product = products[productIndex]
  products.splice(productIndex,1,{...product,...req.body})
  res.json('data updated');
});
// Delete
server.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex(p=>p.id===id)
  products.splice(productIndex,1)
  res.json('Successfully deleted');
});
server.get('/demo', (req, res) => {
  // res.sendStatus(404);
  // res.json(products)
  // res.status(201).send('<h1>hello</h1>')
  // res.sendFile('/Users/abhishekrathore/Desktop/node-app/index.html')
});

server.listen(8080, () => {
  console.log('server started');
});