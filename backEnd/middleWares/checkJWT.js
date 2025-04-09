import jwt from "jsonwebtoken"; //bruh the linter is fucking cool i donno wat i would do without it
const pass = process.env.JWT_SECRET || "secret_key";

const checkJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.redirect("/auth");
    res.status.json({ msg: " The user is redirected to auth page " });
  }
  try {
    const decoded = jwt.verify(token, pass);
    if (decoded) {
      res.status(302).json({ msg: "User is logged in" });
      return res.redirect("/services");
    }
  } catch (err) {
    res.status(402).json({ msg: "The jwt token is wrong" });

    return res.redirect("/auth");
  }
};

module.exports = checkJWT;
