const express = require('express');
const router = express.Router();
const {createReservation} = require('../controllers/reserve.controllers')

router.post('/createReservation',createReservation)   
module.exports = router