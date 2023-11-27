"use strict";
const express = require('express');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'BaseUsers'
});
connection.connect(function (err) {
    if (err) {
        console.error('Error conectando a la DB ' + err.stack);
        return;
    }
    console.log('Conexión establecida' + connection.threadId);
});
const configuracion = {
    hostname: "127.0.0.1",
    port: 3000
};
app.listen(configuracion, () => {
    console.log('Servidor iniciado en http://localhost:' + configuracion.port);
});
app.put("/Registro", (req, res) => {
    let username = req.body.username;
    let rut = req.body.rut;
    let email = req.body.email;
    let region = req.body.region;
    let comuna = req.body.comuna;
    let password = req.body.password;
    connection.query('INSERT INTO usuarios SET ?,?,?,?,?,SHA(?)', [username, rut, email, region, comuna, password], function (err, rows, fields) {
        res.send(JSON.stringify(rows));
    });
});
app.post("/Login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    connection.query('SELECT * FROM usuarios WHERE username=? AND password=SHA(?)', [username, password], function (err, rows, fields) {
        res.send(JSON.stringify(rows));
    });
});
//Parte de administrador
app.get("/Cuenta-Admninistrador", (req, res) => {
    connection.query('SELECT * FROM usuarios', function (err, rows, fields) {
        res.send(JSON.stringify(rows));
    });
});
