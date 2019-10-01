"use strict"

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "Gijs",
  password: "Bartje83!",
  database: "sexshop"
});

connection.connect((err) => {
  if(err) throw err;
  console.log("Connected");
});

const expressModule = require("express");
const express = expressModule();

const port = 3000;

express.listen(port, () => {
  console.log("Server is running on port:"+port);
});

const bodyParser = require("body-parser");

express.use(bodyParser.json());

express.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

express.get("/api/dildos", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  connection.query("SELECT * FROM dildos", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

express.put("/api/dildos/:id", (req, res) => {
  const id = +req.params.id;
  const input = req.body;
  connection.query("UPDATE dildos SET ? WHERE id = ?", [input, id], (err) => {

      if (err) throw err;
      connection.query("SELECT * FROM dildos WHERE id = ?", [id],
      (error, response) => {
        if (error) throw err;
        res.send(response[0]);
    });
  });
});
