'use strict';
const Administrador=require('../models/adminstrador');
const bcrypt=require("bcrypt");
const generarjwt = require('../helpers/generarjwt');

const controllerAdmin={
    saveUser:async(req,res)=>{
        const {nombre,email,password}=req.body;
        const adminstrador=await Administrador.findOne({email});
        if(adminstrador){
            return res.status(500).send({
                message:'Ya existe el usuario',
                status:'error'
            })
        };
        /*
        1. Crear el salt
        2. Encriptamos
        */
       const salt=bcrypt.genSaltSync();
       const passwordencrypt=bcrypt.hashSync(password,salt);
       try{
            const admin=new Administrador;
            admin.nombre=nombre;
            admin.email=email;
            admin.password=passwordencrypt;
            const token=await generarjwt(admin._id,admin.email);
            admin.save((err,adminstrador)=>{
                if(err || !adminstrador){
                    return res.status(500).send({
                        status:'error',
                        message:'Not inserted'
                    })
                }
                else{
                    return res.status(200).send({
                        status:'ok',
                        adminstrador,
                        token
                    })
                }
            })
       }
       catch(error){
            console.log(error);
            return res.status(500).send({
                message:'Conctacte al admin',
                status:'error'
            })
       }

    }, 
    login:async(req,res)=>{
        try{
            const {email,password}=req.body; 
            console.log(password);
            const admin=await Administrador.findOne({email:email});
            if(!admin){
                return res.status(500).send({
                    message:'Datos incorrectos',
                    status:'error'
                })
            }
            const token=await generarjwt(admin._id,admin.email);
            console.log(admin.password);
            const validPassword=bcrypt.compareSync(password,admin.password);
            if(validPassword){
                return res.status(200).send({
                    admin,
                    token,
                    status:'ok'
                })
            }
            return res.status(500).send({
                message:'Datos incorrectos',
                status:'error'
            })
            
        }
        catch (error){
            console.log(error);
            return res.status(500).send({
                message:'Conctacte al admin',
                status:'error'
            })
        }
    }
}
module.exports=controllerAdmin;
