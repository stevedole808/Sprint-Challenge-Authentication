const jwt = require("jsonwebtoken");

function signToken(user) {
  const payload = {
    username: user.username
  };
  const secret = process.env.JWT_SECRET || "keep me secret";
  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = signToken;
