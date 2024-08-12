const express = require('express');
const router = express.Router();
const subscribe = require('./subscribe.routes');
const reservationRoutes = require('./reserve.routes');

router.use ('/api', subscribe)
router.use ('/api',reservationRoutes)

module.exports = router