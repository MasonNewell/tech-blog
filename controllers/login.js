const router = require("express").Router();
const User = require("../models/User");

// GET login
router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const loginData = await User.create(req.body);
  return res.json(loginData);
});

module.exports = router;
