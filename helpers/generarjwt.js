'use strict';
const { reject } = require('bcrypt/promises');
const jwt=require('jsonwebtoken');
const generarjwt=(uid,email)=>{
   return new Promise( (resolve,reject)=>{
    const payload={uid,email};
    jwt.sign(payload,'CLASEFULLSTACK',{
        expiresIn:'24h'
    },(error,token)=>{
        if(error){
            console.log(error);
            reject("No se pudo guardar")
        }
        resolve(token);
    })
   })
}
module.exports=generarjwt;