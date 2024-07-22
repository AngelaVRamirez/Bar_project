const express = require('express');
const router = express.Router();
const {createReserve} = require('../controllers/reserve.controllers')

router.post('/create_reserve',createReserve)


module.exports = router