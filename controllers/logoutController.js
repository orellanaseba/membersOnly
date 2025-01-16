const cerrarSesion = (req, res) => {
    req.logout((err) => {
        if(err) return next(err);
        res.redirect("/login");
    })
}

module.exports = {
    cerrarSesion
}