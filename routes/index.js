const express = require('express');
const { register, login } = require('../userController/usercontroller');

const routes =  express.Router();

routes.get('/', (req, res) => {
    res.send('Hello World');
});

routes.post('/register', register);

routes.post('/login', login);

module.exports = routes;