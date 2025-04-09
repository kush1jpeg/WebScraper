export const clearCookies = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
  });

  res.status(200).json({ msg: "Logged out successfully" });
  res.redirect("/");
};
