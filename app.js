const express = require("express");
const path = require("node:path");
const session = require("express-session")
const passport = require("./config/passportConfig.js")
const PgSession = require("connect-pg-simple")(session);
const pool = require("./databases/pool.js");

// Routes
const indexRouter = require("./routes/indexRouter")
const loginRouter = require("./routes/loginRouter");
const feedRouter = require("./routes/feedRouter");
const logoutRouter = require("./routes/logoutRouter")
const registerRouter = require("./routes/registerRouter")

const app = express();


 // Activa la configuración de Passport
app.use(session(
    {
        secret: "members_only",
        resave: false,
        saveUninitialized: false,
        store: new PgSession({
            pool: pool,
        }),
        cookie: {
            secure: false,
            httpOnly: true
        }
    }
    )
) 
app.use(passport.session())

app.use(express.urlencoded({ extended: true }))
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Corriendo en el puerto ${PORT}`));