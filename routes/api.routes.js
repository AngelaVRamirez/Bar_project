const express = require('express');
const router = express.Router();
const subscribe = require('./subscribe.routes');
const reservationRoutes = require('./reserve.routes');
const candidateRoutes = require('./candidate.routes')

router.use ('/api', subscribe)
router.use ('/api',reservationRoutes)
router.use('/api', candidateRoutes)

module.exports = router     