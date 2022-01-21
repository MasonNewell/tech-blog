const router = require("express").Router();
const User = require("../models/User");

// login view
router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/blogs");
    return;
  }
  res.render("login");
});

//  new user signup
router.post("/new", async (req, res) => {
  const loginData = await User.create(req.body);
  return res.json(loginData);
});

//  Login
router.post("/", async (req, res) => {
  try {
    const loginData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!loginData) {
      res.status(400).json({ message: "incorrect username" });
      return;
    }
    const password = await loginData.checkPassword(req.body.password);
    if (!password) {
      res.status(400).json({ message: "invalid password" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = loginData.id;
      req.session.loggedIn = true;
      res.status(200).json({ user: loginData, message: "Logged in!" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
