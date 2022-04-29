'use strict';
const express=require('express');
const admincontroller=require('../controllers/admincontroller');
const router=express.Router();
router.post('/adminstrador',admincontroller.saveUser);
router.post('/login',admincontroller.login);
module.exports=router;