const { Router } = require("express");
const feedRouter = Router();
const authMiddleware = require("../middlewares/authMiddleware")
const feedController = require("../controllers/feedController")

feedRouter.get("/", authMiddleware, feedController.mostrarUsuarios);
feedRouter.get("/invitado", feedController.mostrarFeedInvitado);
feedRouter.get("/perfil/:id", authMiddleware, feedController.mostrarPerfilUsuario)

feedRouter.post("/", feedController.crearNuevoPost);
feedRouter.post("/delete/:id", feedController.eliminarPost)

module.exports = feedRouter