require("dotenv").config();

var express = require("express");
const app = require("../app.js");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const database = require("../db/dbinterface.js");

//middleware to authenticate token if stil valid -> call next()
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  console.log(token)
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

//generate AccessToken
function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) //..._SECRET, {expiresIn: '15s'} ...
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Ok");
});
router.get("/test", authenticateToken, function (req, res, next) {
  res.json(req.user);
});
router.get("/events", async function (req, res, next) {
  res.send(await database.getEvents());
});
router.get("/accounts", async function (req, res, next) {
  res.send(await database.getUsers());
});
router.post("/frl", async function (req, res, next) {
  console.log(req.body.id);
  let friends = await database.getFriends(req.body.id);
  console.log(friends);
  try {
    if (!friends[0]) {
      return res.status(404).send('No friends found')
    }
    else {
      res.status(201).send(friends);
    }
  } catch {
    res.status(500).send("Something broke");
  }
});
router.get("/profile", async function (req, res, next) {
  res.send(await database.getUserDetail(req.session.userId));
});

//get req.body (registered User data), hashing password -> putting req.body into accounts table

router.post("/register", async function (req, res, next) {
  const users = await database.getUsers();
  let test = users.find(el => el.username == req.body.username);
  console.log(test);
  try {
    if(users.find(el => (el.username == req.body.username) && (el.email == req.body.email))) return res.status(400).send('username and email exist')
    else if(users.find(el => el.username == req.body.username)) return res.status(401).send('username exists')
    else if(users.find(el => el.email == req.body.email)) return res.status(402).send('email exists')
    else{
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      await database.registerUser(req.body, hashedPassword);
      res.status(201).send();
    }
  } catch {
    res.status(500).send("Something broke");
  }
});

//get req.body(username, password), get data from pwas to authenticate hashed password and req.body.password -> send accessToken with expiration and refreshToken to Client for session 
router.post("/login", async function (req, res) {
  console.log(req.body);
  const user = await database.getPWAS(req.body.username);
  console.log(user[0])
  if (!user[0]) {
    return res.status(401).send('Username is wrong');
  }
  try {
    if (await bcrypt.compare(req.body.password, user[0].password)) {
      console.log("works")
      const userId = { username: req.body.username };
      const accessToken = generateAccessToken(userId);
      const refreshToken = jwt.sign(userId, process.env.REFRESH_TOKEN_SECRET)
      await database.insertRefreshToken(refreshToken);
      const userDetail = await database.getUserDetail(req.body.username);
      res.json({user: userDetail[0], accessToken: accessToken, refreshToken: refreshToken });
    } else {
      res.status(401).send("Password is wrong");
    }
  } catch {
    res.status(500).send("Something broke");
  }
});

//checks if refreshToken is valid, gets refreshToken to reauthenticate the accessToken -> sends new accessToken
router.post("/token", async function (req, res) {
  const refreshToken = req.body.token
  const refreshTokenDB = await database.getRefreshToken(refreshToken)
  console.log(refreshToken);
  console.log(refreshTokenDB)
  if(refreshToken == null) return res.sendStatus(401)
  if(Object.keys(refreshTokenDB).length === 0) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({username: user.username})
    res.json({accessToken: accessToken})
  })
});

//destory AccessToken and RefreshToken
router.post("/logout", async function (req, res) {
  console.log(req.body)
  database.deleteRefreshToken(req.body.token)
  res.sendStatus(204)
});

module.exports = router;
