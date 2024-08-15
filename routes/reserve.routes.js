const express = require('express');
const router = express.Router();
const {createReservation, getAllReservation} = require('../controllers/reserve.controllers')

router.post('/createReservation',createReservation) 
router.get('/getallReservation',getAllReservation)    
module.exports = router