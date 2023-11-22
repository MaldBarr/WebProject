const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    port: 3306,
    database : 'BaseTree'
});

connection.connect(function(err:any) {
    if (err) {
    console.error('Error conectando a la DB ' + err.stack);
    return;
    }
    console.log('Conexión establecida' + connection.threadId);
});
