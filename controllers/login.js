const router = require("express").Router();
const User = require("../models/User");

// GET login
router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
