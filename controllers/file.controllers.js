const {request,response} = require('express')
const multer = require('multer')
const path = require('path')
const File = require('../models/file')


const storage = multer.diskStorage({
    destination:function(req=request,file,cb){
        cb(null,'uploads/')
    }
},
filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
})
