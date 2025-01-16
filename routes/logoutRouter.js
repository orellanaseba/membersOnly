const { Router } = require("express");
const logoutRouter = Router();

const logoutController = require("../controllers/logoutController.js")

logoutRouter.get("/", logoutController.cerrarSesion);


module.exports = logoutRouter;