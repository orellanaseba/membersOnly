const { Router } = require("express");
const registerRouter = Router();
const registerController = require("../controllers/registerController")
const validarInput = require("../middlewares/validarInput");


registerRouter.post("/", validarInput.validarCampos, registerController.crearNuevoUsuario)

module.exports = registerRouter