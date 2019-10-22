"use strict"

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Gijs',
  password: 'Bartje83!',
  database: 'bootjesverhuurbedrijfraymie'
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

app.get('/api/boot', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  connection.query('SELECT * FROM boot', (err, boot) => {
    if (err) throw err;
    res.send(boot);
  });
});

app.get("/api/boot/:id", (req, res) => {
  const id = +req.params.id;
  connection.query("SELECT * FROM boot WHERE id = ?", [id], (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});



app.post('/api/boot', function (req, res) {
  const content = req.body;
  console.log(content);
  connection.query('INSERT INTO boot SET ?', content, (err, result) => {
    if (err) throw err;
    res.send(result)
  });
  // console.log(content);
  // res.send(content);
});



app.delete('/api/boot/:id', function (req, res) {

  const id = +req.params.id;

  connection.query('DELETE FROM boot WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    console.log('Deleted', result.affectedRows, ' rows');
    res.status(204).end();
  });
});

app.put('/api/boot/:id', function (req, res) {
  const id = +req.params.id;
  const inputUser = req.body;
  console.log(inputUser);

  connection.query('UPDATE boot SET ? WHERE id = ?', [inputUser, id], (err, response) => {
    if (err) throw err;
    connection.query('SELECT * FROM boot WHERE id = ?', id, (updatedErr, updatedBoot) => {
      if (updatedErr) throw updatedErr
      res.send(updatedBoot);
    });
  });
});


//////////////////////////////////////////////////////////////////////////////////////////////////




app.get('/api/klant', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  connection.query('SELECT * FROM klant', (err, klant) => {
    if (err) throw err;
    res.send(klant);
  });
});

app.get("/api/klant/:id", (req, res) => {
  const id = +req.params.id;
  connection.query("SELECT * FROM klant WHERE id = ?", [id], (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});



app.post('/api/klant', function (req, res) {
  const content = req.body;
  console.log(content);
  connection.query('INSERT INTO klant SET ?', content, (err, result) => {
    if (err) throw err;
    res.send(result)
  });
  // console.log(content);
  // res.send(content);
});



app.delete('/api/klant/:id', function (req, res) {

  const id = +req.params.id;

  connection.query('DELETE FROM klant WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    console.log('Deleted', result.affectedRows, ' rows');
    res.status(204).end();
  });
});

app.put('/api/klant/:id', function (req, res) {
  const id = +req.params.id;
  const inputUser = req.body;
  console.log(inputUser);

  connection.query('UPDATE klant SET ? WHERE id = ?', [inputUser, id], (err, response) => {
    if (err) throw err;
    connection.query('SELECT * FROM klant WHERE id = ?', id, (updatedErr, updatedKlant) => {
      if (updatedErr) throw updatedErr
      res.send(updatedKlant);
    });
  });
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////




app.get('/api/tocht', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  connection.query('SELECT * FROM tocht', (err, tocht) => {
    if (err) throw err;
    res.send(tocht);
  });
});

app.get("/api/tocht/:id", (req, res) => {
  const id = +req.params.id;
  connection.query("SELECT * FROM tocht WHERE id = ?", [id], (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});



app.post('/api/tocht', function (req, res) {
  const content = req.body;
  console.log(content);
  connection.query('INSERT INTO tocht SET ?', content, (err, result) => {
    if (err) throw err;
    res.status(201).send(result);
  });
  // console.log(content);
  // res.send(content);
});

app.post('/api/tocht/:id/end', function (req, res) {
  const content = req.body;
  const id = +req.params.id;
  console.log(content);

  connection.query('update tocht SET eindtijd = current_timestamp where id =?;', [id], (err, result) => {
    if (err) throw err;

    connection.query("SELECT * FROM tocht WHERE id = ?", [id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});



app.delete('/api/tocht/:id', function (req, res) {

  const id = +req.params.id;

  connection.query('DELETE FROM tocht WHERE id = ?', id, (err, result) => {
    if (err) throw err;
    console.log('Deleted', result.affectedRows, ' rows');
    res.status(204).end();
  });
});

app.put('/api/tocht/:id', function (req, res) {
  const id = +req.params.id;
  const inputUser = req.body;
  console.log(inputUser);

  connection.query('UPDATE tocht SET ? WHERE id = ?', [inputUser, id], (err, response) => {
    if (err) throw err;
    connection.query('SELECT * FROM tocht WHERE id = ?', id, (updatedErr, updatedTocht) => {
      if (updatedErr) throw updatedErr
      res.send(updatedTocht);
    });
  });
});
