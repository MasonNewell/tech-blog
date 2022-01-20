const router = require("express").Router();

// logout
router.get("/", async (req, res) => {
  if (req.session.loggedIn) {
    await req.session.destroy(() => res.status(200).end());
  } else {
    res.status(400).end();
  }
});

module.exports = router;
