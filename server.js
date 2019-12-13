const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const jwt = require("jsonwebtoken");

const candyRouter = require("./candy/candy-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/candy", candyRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

// server.get("/token", (req, res) => {
//   const payload = {
//     subject: "thisuser",
//     userid: "user1"
//   };

//   const secret = "devotionsc";
//   const options = {
//     expiresIn: "1h"
//   };

//   const token = jwt.sign(payload, secret, options);

//   res.json(token);
// });

module.exports = server;
