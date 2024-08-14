const express = require('express');
const router = express.Router();
const {uploadCandidate} = require('../controllers/candidate.controllers')
const { upload } = require('./../middlewares/upload')

router.post('/create_candidate',upload.single('Cv'), uploadCandidate)


module.exports = router