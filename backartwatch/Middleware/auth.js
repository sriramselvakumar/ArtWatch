const jwt = require("jsonwebtoken");
const config = require("config");

function auth(req, res, next) {
  console.log("user being authenticated");
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Access Denied. No token provided");
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send("Invalid token ");
  }
}

module.exports.auth = auth;
