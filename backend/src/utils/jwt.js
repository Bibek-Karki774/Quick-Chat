const jwt = require("jsonwebtoken");

function genToken(user) {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );
}

function verifyToken(token){
  return jwt.verify(token, process.env.JWT_SECRET)
}
module.exports = {
  genToken,
  verifyToken
};
