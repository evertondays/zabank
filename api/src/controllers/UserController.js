const routes = require('express').Router();

const UserApplication = require('../app/UserApplication');

const userApplication = new UserApplication();

routes.post('/api/user', userApplication.create);
routes.post('/api/login', userApplication.login);

module.exports = routes;