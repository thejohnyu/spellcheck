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
const port = process.env.PORT || 5000;
/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 5000);
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

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
