// /**
//  * Express router for handling routes related to user registration and login.
//  * @module routes
//  */

const express = require('express');
const { register, login } = require('../userController/usercontroller');
const { userRegisterValidation, userLoginValidation } = require('../Middleware/UserValidation');

const routes =  express.Router();

// /**
//  * Route handler for the root endpoint.
//  * @name GET /
//  * @function
//  * @param {Object} req - Express request object.
//  * @param {Object} res - Express response object.
//  */
routes.get('/', (req, res) => {
    res.send('Hello World');
});

// /**
//  * Route handler for user registration.
//  * @name POST /register
//  * @function
//  * @param {Object} req - Express request object.
//  * @param {Object} res - Express response object.
//  */

routes.post('/register',userRegisterValidation, register);

// /**
//  * Route handler for user login.
//  * @name POST /login
//  * @function
//  * @param {Object} req - Express request object.
//  * @param {Object} res - Express response object.
//  */
routes.post('/login',userLoginValidation, login);

module.exports = routes;
