const express = require('express');
const router = express.Router();
const reserve = require('./../routes/reserve.routes');
router.use ('/api',reserve)

module.exports = router