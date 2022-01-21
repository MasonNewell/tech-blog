const router = require("express").Router();
const { User, Blog, Comments } = require("../models");
const withAuth = require("../utils/auth.js");

router.get("/", withAuth, async (req, res) => {
  try {
    const dashboardData = await User.findByPk(req.session.user_id, {
      include: [{ model: Blog }, { model: Comments }],
    });
    const data = dashboardData.get({ plain: true });
    res.render("dashboard", {
      ...data,
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
