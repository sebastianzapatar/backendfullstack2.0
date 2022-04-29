'use strict';
const express=require('express');
const controller=require('../controllers/controller');
//libreta de direcciones
const router=express.Router();
router.get('/datos',controller.datosestudiante);
router.post('/test',controller.test);
router.post('/estudiante',controller.save);
router.get('/estudiante',controller.get_estudiantes);
router.get('/estudiante/:id',controller.get_estudiante);
router.put('/estudiante/:id',controller.update_estudainte);
router.delete('/estudiante/:id',controller.delete);
module.exports=router;