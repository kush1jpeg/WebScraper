const jwt = require('jsonwebtoken');
const pass = process.env.JWT_SECRET || "secret_key";

const checkJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return next(); // No token → Let them continue to login/register }
    try {
    const decoded = jwt.verify(token, pass);
    return res.status(302).json({ msg: "User is logged in" });
    res.redirect('/services' , checkJWT);
  } catch (err) {
    //if wrong jwt
    return next();
  }
};

module.exports = checkJWT;
