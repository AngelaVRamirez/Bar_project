const express = require('express');
const router = express.Router();
const {filescontroller} = require('../controllers/file.controllers')

router.post('/create_reserve',filescontroller)


module.exports = router