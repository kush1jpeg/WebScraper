const jwt = require("jsonwebtoken");
const cookie = require("cookie");

export const jwtToken = async (req, res) => {
  token = jwt.sign(req.username, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.cookie("token", token, {
    //cookie syntax = name , value , [options]
    httpOnly: true,
    secure: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 din
  });

  //redirecting the user to services as he is now logged in -
  res.status(200).json({ message: "Login successful" });
  res.redirect("/services");
};
