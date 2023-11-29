const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

var jsonParser = bodyParser.json();

app.use(cors());


const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    port: 3306,
    database : 'baseuser'
});

connection.connect(function(err:any) {
    if (err) {
    console.error('Error conectando a la DB ' + err.stack);
    return;
    }
    console.log('Conexión establecida' + connection.threadId);
});

const configuracion={
    hostname:"127.0.0.1",
    port:3000
}

app.listen(configuracion,()=>{
    console.log('Servidor iniciado en http://localhost:'+configuracion.port)
})


app.get("/Registro",(req:any,res:any)=>{
    connection.query('SELECT * FROM usuarios',function(err:any,rows:any,fields:any){
        res.send(JSON.stringify(rows));
    });
})

app.put("/Registro",jsonParser,(req:any,res:any)=>{
    let username=req.body.username;
    let rut=req.body.rut;
    let email=req.body.email;
    let region=req.body.region;
    let comuna=req.body.comuna;
    let password=req.body.password;
    connection.query('INSERT INTO usuarios(username,rut,email,region,comuna,password) values(?,?,?,?,?,SHA1(?))',[username,rut,email,region,comuna,password],function(err:any,rows:any,fields:any){
        res.send(rows);
    });
})

app.post("/Login",jsonParser,(req:any,res:any)=>{
    let username=req.body.username;
    let password=req.body.password;
    connection.query('SELECT * FROM usuarios WHERE username=? AND password=SHA1(?)',[username,password],function(err:any,rows:any,fields:any){
        res.send(JSON.stringify(rows));
    });
})

//Parte de administrador
app.get("/cuentaAdmin",(req:any,res:any)=>{
    connection.query('SELECT * FROM usuarios',function(err:any,rows:any,fields:any){
        res.send(JSON.stringify(rows));
    });
})

app.delete("/cuentaAdmin",jsonParser,(req:any,res:any)=>{
    let username=req.body.username;
    connection.query('DELETE FROM usuarios WHERE username=?',[username],function(err:any,rows:any,fields:any){
        res.send(JSON.stringify({"eliminado":true}));
    });
})