const fs = require('fs');
const express = require('express')
const index = fs.readFileSync('index.html','utf-8')
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

// creating server using express.js
const server = express();
server.use(express.json());


//API, Endpoints
server.get('/products', (req,res)=>{
    res.send(products);
});
server.get('/products/:id', (req,res)=>{
    const id = +req.params.id
    const product = products.find(p=>p.id===id)
    res.send(product);
});
server.post('/products',(req,res)=>{
    products.push(req.body)
    res.json(req.body)
})
server.put('/',(req,res)=>{
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.send('successfully updated');
})
server.delete('/',(req,res)=>{
    res.json({type: 'DELETE'})
})
server.patch('/',(req,res)=>{
    res.json({type: 'PATCH'})
})

server.listen(8080, ()=>{
    console.log('server started')
});


