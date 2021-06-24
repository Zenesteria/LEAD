const express = require('express');
const router = express.Router();

router.get('/home',function(req,res){
    res.render('home');
});

router.get('/about',function(req,res){
    res.render('about');
});

module.exports = router;