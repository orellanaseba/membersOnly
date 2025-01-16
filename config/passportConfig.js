const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../databases/queries");

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await db.obtenerUsuarioNombre(username);
        const match = await bcrypt.compare(password, user.contrasenia);

        if(!user) {
            return done(null, false, { message: "Nombre de usuario incorrecto." })
        }

        if(!match) {
            return done(null, false, { message: "Contraseña incorrecta." });
        }
        return done(null, user);  
    }
    catch(err) {
        return done(err);
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id_usuario);
})

passport.deserializeUser(async (id_usuario, done) => {
    try {
        const user = await db.obtenerUsuarioId(id_usuario);
        done(null, user);
    }
    catch(err) {
        done(err);
    }
})

module.exports = passport;