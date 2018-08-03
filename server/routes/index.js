const router = require('express').Router();
const searchRoutes = require('./search.routes');
const autoCompleteRoutes = require('./auto.complete.routes');

router.use('/api/search', searchRoutes);
router.use('/api/autocomplete', autoCompleteRoutes)

module.exports = router;
