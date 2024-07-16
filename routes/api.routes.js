const express = require('express');
const router = express.Router();
const user = require('./../routes/reserve.routes');

router.use('/api', user)

module.exports = router