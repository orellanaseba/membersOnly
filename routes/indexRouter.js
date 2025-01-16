const { Router } = require("express");
const indexRouter = Router();
const authMiddleware = require("../middlewares/authMiddleware")

indexRouter.get("/", (req, res) => {
    if(req.isAuthenticated()) {
        return res.redirect("/feed");
    }
    res.render("index");
})

module.exports = indexRouter;