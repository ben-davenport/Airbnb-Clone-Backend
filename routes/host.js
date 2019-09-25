var express = require('express');
var router = express.Router();
const db = require('../db');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const fs = require('fs')

router.post('/home', upload.single('locationImage'), (req,res)=>{
    console.log(req.body)
    console.log(req.file)
    fs.rename(req.file.path, req.file.destination+'/'+req.file.originalname, (err)=>{
        if(err) throw err;
    });
    res.json(req.body)
});

module.exports = router;