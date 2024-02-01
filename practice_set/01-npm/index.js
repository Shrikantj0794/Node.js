// const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = data.products;

const express = require('express');
const app = express();

//middleware1

// app.use((req, res, next)=>{
//   console.log(req.method, req.id, req.hostname);
//   next()
// })


//middleware2
const auth = (req, res, next)=>{

  if (req.query.password=='123'){
    next()
  }else{
    res.sendStatus(401);
  }
}

// app.use(auth);


//API - Endpoint - 
app.get('/',auth, (req, res) => {
  // res.send('hello');
  res.json({type: 'GET'})
});

app.post('/',auth, (req,res)=>{
  res.json({type: 'POST'})
});
app.put('/',auth, (req,res)=>{
  res.json({type: 'PUT'})
});
app.delete('/', (req,res)=>{
  res.json({type: 'DELETE'})
});
app.patch('/', (req,res)=>{
  res.json({type: 'PATCH'})
});

app.listen(8080, () => {
  console.log(`Example app listening on port`)
})
