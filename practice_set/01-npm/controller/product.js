const fs = require('fs');
// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

exports.CreateProduct = (req, res)=>{
    console.log(req.body)
    products.push(req.body)
    res.json({ type: 'POST' })
  }
  exports.ReadProduct = (req, res) => {
    const id = +req.params.id;
    const product = products.find(p=>p.id===id)
    res.json(product);
  }
  exports.ReplaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body, id:id})
    res.json('data updated');
  }
  exports.UpdateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex]
    products.splice(productIndex,1,{...product,...req.body})
    res.json('data updated');
  }
  exports.DeleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    products.splice(productIndex,1)
    res.json('Successfully deleted');
  }