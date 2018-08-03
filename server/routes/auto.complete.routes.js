const router = require('express').Router()
const autoCompleteController = require('../controllers/auto.complete.controller')

router.get('/', autoCompleteController.autoComplete)

module.exports = router
