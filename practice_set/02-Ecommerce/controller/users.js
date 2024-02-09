const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = data.users;



// this is controller 

exports.createuser = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(201).json(req.body);
  }
// Read GET /users
exports.readpusers = (req, res) => {
    res.json(users);
  }
// Read GET /users/:id
exports.readusernowise = (req, res) => {
    const id = +req.params.id;
    const user = users.find(p=>p.id===id)
    res.json(user);
  }
// Update PUT /users/:id
exports.updateuser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id)
    users.splice(userIndex,1,{...req.body, id:id})
    res.status(201).json();
  }
  // Update PATCH /users/:id
  exports.replaceuser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id)
    const user = users[userIndex];
    users.splice(userIndex,1,{...user,...req.body})
    res.status(201).json();
  }
// Delete DELETE /users/:id
exports.deleteuser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id)
    const user = users[userIndex];
    users.splice(userIndex,1)
    res.status(201).json(user);
  }
