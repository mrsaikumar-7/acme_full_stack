const express = require('express');
const router = express.Router();
const {User}  = require('../models/user');
const mongoose = require('mogoose');
 

router.post('/',async(req,res)=>{
    console.log('users router');
    res.send('users router');
    res.end()
})


module.exports = router;