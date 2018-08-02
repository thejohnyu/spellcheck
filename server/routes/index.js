const router = require('express').Router();
const searchRoutes = require('./search.routes');

router.use('/api/search', searchRoutes);

module.exports = router;
