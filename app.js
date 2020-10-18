let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let indexRouter = require("./routes/index");
let cors = require("cors");
let app = express();

app.set("port", 9000);
const db = require("./config/mongoose");

//========================================================================
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

const MongoStore = require("connect-mongo")(session);
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(
  session({
    name: "sanyukt",

    secret: "somesecret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100, //in milliseconds
    },
    store: new MongoStore(
      {
        mongooseConnection: db,
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use("/", indexRouter);

app.listen(9000, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Server is running on port", 9000);
});

// module.exports = app;
