const mysql = require('mysql');
const {promisify}= require('util');

require('dotenv').config();


const conexion = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});


/*
El metodo createPool no soporta promesas, entonces vamos a requerir "" que permite
transformar callbacks en promesas
*/ 

conexion.getConnection((err,conn)=>{
    if(err){
        console.log('Error al conectarse a la base de datos...');
        
    }else{
        console.log('Conectado a la base de datos...');
       }

    if(conn){
       conn.release(); //Comienza la conexion
    }
    return;
});




conexion.query =  promisify(conexion.query);
//Cada vez que quiera hacer una consulta, ahora puedo utilizar promesas

module.exports = conexion;