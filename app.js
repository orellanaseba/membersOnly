const express = require("express");
const app = express();
const path = require("node:path");
const session = require("express-session")
const passport = require("./config/passportConfig.js")

// Routes
const indexRouter = require("./routes/indexRouter")
const loginRouter = require("./routes/loginRouter");
const feedRouter = require("./routes/feedRouter");
const logoutRouter = require("./routes/logoutRouter")
const registerRouter = require("./routes/registerRouter")


 // Activa la configuración de Passport
app.use(session({ secret: "members_only", resave: false, saveUninitialized: false })) 
app.use(passport.session())

app.use(express.urlencoded({ extended: false }))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
})

app.use((req, res, next) => {
    res.locals.posts = req.posts;
    next();
})

app.use("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/feed", feedRouter);
app.use("/logout", logoutRouter);

app.listen(3000, () => console.log("http://localhost:" + 3000));