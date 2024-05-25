const routes = require("express").Router();

const UserApplication = require("../app/UserApplication");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const userApplication = new UserApplication();

routes.post("/api/user", userApplication.create);
routes.post("/api/login", userApplication.login);
routes.get("/api/myself", AuthMiddleware, userApplication.myself);
routes.delete("/api/logout", AuthMiddleware, userApplication.logout);

routes.post("/api/user/deposit", AuthMiddleware, userApplication.deposit);
routes.post("/api/user/withdraw", AuthMiddleware, userApplication.withdraw);

module.exports = routes;
