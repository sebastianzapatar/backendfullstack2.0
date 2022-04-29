'use strict';
//cargar los modulos de node
const express=require('express');
const cors=require('cors');
//vamos a ejecutar el servidor
const app=express();
//Cargar los archivos y asignarles una ruta
const urls=require('./url/url');
const admin=require('./url/urladmin');
//middleware lo que traduce la peticion a json
app.use(express.json());
app.use(express.urlencoded());
//Poner los cors para que otras aplicaciones se conecten
app.use(cors());
//Prefijos para hacer las peticiones
app.use('/estudiantes/',urls);
app.use('/admin/',admin);
//Exportar los modulos
module.exports=app;