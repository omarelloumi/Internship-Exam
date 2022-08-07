const express = require('express')
const router = express.Router()
const {affectStage} = require('../controllers/stageController')

router.post('/affect',affectStage);

module.exports = router

