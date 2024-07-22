const express = require('express');
const router = express.Router();
const subscribe = require('./subscribe.routes');

router.use ('/api', subscribe)
const reserve = require('./../routes/reserve.routes');
router.use ('/api',reserve)


module.exports = router