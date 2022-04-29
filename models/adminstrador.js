'use strict';
const mongoose=require('mongoose');
const schema=mongoose.Schema;
const AdministradorSchema=schema({
    email:{
        type: String,
        unique: true
      },
    nombre:String,
    password:String
})
module.exports=mongoose.model('Administrador',AdministradorSchema);