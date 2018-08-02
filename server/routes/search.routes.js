const router = require('express').Router();
const searchController = require('../controllers/search.controller');

router.get('/', searchController.getWord);

module.exports = router;
