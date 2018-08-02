/**
 * Module dependencies.
 */
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');
const helmet = require('helmet');
const errorhandler = require('errorhandler');
const cors = require('cors');
/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
/**
 * Routes.
 */
app.use(require('./server/routes'));

app.use(errorhandler);
/**
 * Start Express server.
 */
app.listen(5000, () => console.log('App listening on port 5000!'));

module.exports = app;
