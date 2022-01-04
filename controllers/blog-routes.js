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
    const blog = blogData.get({ plain: true });
    res.render("blog", blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add new blog post
router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create({
      post_title: req.body.post_title,
      post_contents: req.body.post_contents,
      post_creator: req.body.post_creator,
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
