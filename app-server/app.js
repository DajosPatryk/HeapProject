var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();



app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors(
  {
    // origin: "http://localhost:8080",
    // credentials: true
  }
));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.get(/.*/, (req, res) =>
  res.sendFile(path.resolve(__dirname, "public/index.html"))
);





// const TWO_HOURS = 1000 * 60 * 60 * 2;

// const {
//   PORT = 3000,
//   NODE_ENV = "development",
//   SESS_NAME = "sid",
//   SESS_SECRET = "ssh!quiet,it'ascret",
//   SESS_LIFETIME = TWO_HOURS,
// } = process.env;

// const IN_PROD = NODE_ENV === "production";

// app.use(
//   session({
//     name: SESS_NAME,
//     resave: false,
//     saveUninitialized: false,
//     secret: SESS_SECRET,
//     cookie: {
//       maxAge: SESS_LIFETIME,
//       sameSite: true,
//       secure: IN_PROD,
//     },
//   })
// );

module.exports = app;
