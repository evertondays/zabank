const routes = require('express').Router();

const UserApplication = require('../app/UserApplication');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const userApplication = new UserApplication();

routes.post('/api/user', userApplication.create);
routes.post('/api/login', userApplication.login);
routes.get('/api/user/:userId', AuthMiddleware, userApplication.get);

module.exports = routes;