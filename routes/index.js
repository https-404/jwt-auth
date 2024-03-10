const express = require('express');
const routes =  express.Router();

routes.get('/', (req, res) => {
    res.send('Hello World');
});

routes.post('/register', (req, res) => {
    res.send('Register Success');
});

routes.post('/login', (req, res) => {
    res.send('Login Success');
});

module.exports = routes;