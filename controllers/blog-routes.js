const router = require("express").Router();

const blogPost = [
  {
    test: "tester",
  },
];

// Get All Blog Posts
router.get("/", async (req, res) => {
  res.render("all");
});

// Get One Blog Post
router.get("/blog/:num", async (req, res) => {
  // name of view, rendering logic
  return res.render("blog", blogPost[req.params.num - 1]);
});

module.exports = router;
