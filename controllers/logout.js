const router = require("express").Router();

// logout
router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => res.status(200).end());
    res.render("login");
  } else {
    res.status(400).end();
  }
});

module.exports = router;
