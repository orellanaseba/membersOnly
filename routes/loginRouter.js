const { Router } = require("express")
const loginRouter = Router();
const loginController = require("../controllers/loginController");

loginRouter.get("/", loginController.login)
loginRouter.post("/", loginController.autenticar);

module.exports = loginRouter