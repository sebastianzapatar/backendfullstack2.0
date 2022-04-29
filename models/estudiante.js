'use strict';
const mongoose=require('mongoose');
const schema=mongoose.Schema;
const EstudianteSchema=schema({
    nombre:String,
    apellido:String,
    date:{type:Date, default:Date.now}
})
module.exports=mongoose.model('Estudiante',EstudianteSchema);