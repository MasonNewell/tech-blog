const router = require("express").Router();
const Blog = require("../models/Blog");

// Get All Blog Posts
router.get("/", async (req, res) => {
  const blogData = await Blog.findAll().catch((err) => {
    res.json(err);
  });
  const blogPost = blogData.map((blog) => blog.get({ plain: true }));
  res.render("all", { blogPost });
});

// Get One Blog Post
router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    if (!blogData) {
      res.status(404).json({ message: "No blogpost with this id!" });
      return;
    }
    // serialize data
    const blog = blogData.get({ plain: true });
    res.render("blog", blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
