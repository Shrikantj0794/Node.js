const fs = require('fs');
const express = require('express')
const index = fs.readFileSync('index.html','utf-8')
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

// creating server using express.js
const server = express();

server.get('/', (req,res)=>{
    res.send('hello');
    // No need to convert into string
    // res.json(products);
    // res.sendStatus(404)
})

server.listen(8080, ()=>{
    console.log('server started')
});


