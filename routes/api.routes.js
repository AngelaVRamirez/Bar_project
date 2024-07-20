const express = require('express');
const router = express.Router();
const subscribe = require('./subscribe.routes');

router.use ('/api', subscribe)

module.exports = router