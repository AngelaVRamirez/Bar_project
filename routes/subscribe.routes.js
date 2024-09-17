    const express = require('express');
    const router = express.Router();
const {createUser,getAllSubscribe} = require('../controllers/subscribe.controller')

router.post('/subscribe', createUser);
router.get('/get_all_subscribe',getAllSubscribe)

module.exports= router
