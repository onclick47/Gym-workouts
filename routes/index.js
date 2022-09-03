var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const bodyParts = require ("../models/bodypartmodel")



/* GET home page. */

router.get('/', function (req, res, next) {
    if(req.isAuthenticated()){
        res.render('index');
    }else{
        res.redirect('/login');
    }
    
 })


/* GET chest page. */

router.get('/chest', async (req, res, next) =>{

    const data = await bodyParts[0].find({})
    // console.log(typeof data === "array");
    if(req.isAuthenticated()){
        res.render('chest', {data:data});
    }else{
        res.redirect('/login');
    }
    
 })

/* GET back page. */

router.get('/back', async (req, res, next) => {
    const data = await bodyParts[1].find({})
    res.render('back', {data:data});
 })


 /* GET cardio page. */

router.get('/cardio', async (req, res, next) => {
    const data = await bodyParts[2].find({})
    res.render('cardio', {data:data});
 })

//  ---------------------------------------

 
module.exports = router;
