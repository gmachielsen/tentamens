"use strict"

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'gijs',
  password: 'Bartje83!',
  database: 'cars'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

const express = require('express');
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Server running on port: ', port)
});

app.get('/api/cars', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  connection.query('SELECT * FROM cars', (err, cars) => {
    if (err) throw err;
    res.send(cars);
  });
});

app.get("/api/cars/:id", (req, res) => {
  const id = +req.params.id;
  connection.query("SELECT * FROM cars WHERE id = ?", [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});



app.post('/api/cars', function (req, res) {
  const content = req.body;
  connection.query('INSERT INTO cars SET ?', content, (err, result) => {
    if (err) throw err;
    res.send(result)
  });
  // console.log(content);
  // res.send(content);
});



app.delete('/api/cars/:id', function (req, res) {

  const id = +req.params.id;

  connection.query('DELETE FROM cars WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    console.log('Deleted', result.affectedRows, ' rows');
    res.status(204).end();
  });
});

app.put('/api/cars/:id', function (req, res) {
  const id = +req.params.id;
  const inputUser = req.body;
  console.log(inputUser);

  connection.query('UPDATE cars SET ? WHERE id = ?', [inputUser, id], (err, response) => {
    if (err) throw err;
    connection.query('SELECT * FROM cars WHERE id = ?', id, (updatedErr, updatedCars) => {
      if (updatedErr) throw updatedErr
      res.send(updatedCars);
    });
  });
});
