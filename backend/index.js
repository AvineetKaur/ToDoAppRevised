//write basic express boilerplate code
//with express.json() middleware

const express = require('express');
const app = express();

app.use(express.json());

app.get('/todos', function (req, res) {

})
app.post('/todo', function (req, res) {

})
app.put('/completed', function (req, res) {

})

app.listen(3000);