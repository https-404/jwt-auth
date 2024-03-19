/**
 * This is the main entry point of the application.
 * It sets up the Express server, connects to the database,
 * and starts listening on the specified port.
 *
 * @module index
 */

/**
 * Express module
 * @const
 */
const express = require('express');

/**
 * Body Parser module
 * @const
 */
const bodyParser = require('body-parser');

/**
 * Routes module
 * @const
 */
const routes = require('./routes/index');

/**
 * Database connection module
 * @const
 */
require('./db_connection/db.js');

/**
 * Dotenv module
 * @const
 */
const dotenv = require("dotenv");

/**
 * Express application
 * @const
 */
const app = express();

/**
 * Load environment variables from .env file
 */
dotenv.config();

/**
 * The port on which the server will listen
 * @const {number}
 */
const port = process.env.PORT || 3000;

/**
 * Parse JSON bodies for incoming requests
 */
app.use(bodyParser.json());

/**
 * Mount the routes at the specified path
 */
app.use('/api/v1', routes);

/**
 * Start the server and listen on the specified port
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

