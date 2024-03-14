const express = require('express');
const { register, login } = require('../userController/usercontroller');
const { userRegisterValidation } = require('../Middleware/UserValidation');

const routes =  express.Router();

routes.get('/', (req, res) => {
    res.send('Hello World');
});
//completed user validation by adding a middleware - userRegisterValidation using joi
routes.post('/register',userRegisterValidation, register);

routes.post('/login', login);

module.exports = routes;