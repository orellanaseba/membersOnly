const db = require("../databases/queries")
const bcrypt = require("bcryptjs")

const crearNuevoUsuario = async (req, res, next) => {
    try {
        const { nombre, apellido, nombre_usuario, contrasenia, email } = req.body
        bcrypt.hash(contrasenia, 10, async (err, hashed) => {
        if(err) return next(err);
        await db.crearNuevoUsuario(nombre, apellido, nombre_usuario, hashed, email);
        res.redirect("/login");
        console.log("Usuario creado correctamente!", `Nombre: ${nombre}, Contraseña: ${hashed}`);
        })
    }
    catch(err) {
        next(err);
    }
}

module.exports = {
    crearNuevoUsuario
}