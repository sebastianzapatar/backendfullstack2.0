'use strict';
const mongoose=require('mongoose');
const app=require('./app');
const port=2021;
mongoose.connect('mongodb+srv://deffeater:HxC090892.pa$$w0rd@cluster0.pzov4.mongodb.net/myFirstDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Conecto");
    app.listen(port,()=>{
        console.log('Servidor corriendo en http://localhost:'+port);
    })
}).catch(()=>console.log("Imposible conectar"));
//ZPZYIzewegxdzxZ3 elcasique 