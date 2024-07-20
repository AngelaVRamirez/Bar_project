const express = require('express');
const router = express.Router();
const {createUser} = require('../controllers/subscribe.controller')

router.post('/subscribe', createUser)

module.exports= router
