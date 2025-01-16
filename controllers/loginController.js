const passport = require("../config/passportConfig")

const loginController = {
    login: (req, res) => {
        if(req.isAuthenticated()) {
            return res.redirect("/feed");
        }
        res.render("login");
    },

    autenticar: passport.authenticate("local", {
        successRedirect: "/feed",
        failureRedirect: "/login"
    })
}

module.exports = loginController