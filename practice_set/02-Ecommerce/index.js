const fs = require('fs');
const express = require('express')
const index = fs.readFileSync('index.html','utf-8')
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

// creating server using express.js
const server = express();

//API, Endpoints
server.get('/', (req,res)=>{
    res.send('hello');
    // No need to convert into string
    // res.json(products);
    // res.sendStatus(404)
})
server.put('/',(req,res)=>{
    res.json({type: 'PUT'})
})
server.post('/',(req,res)=>{
    res.json({type: 'POST'})
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


