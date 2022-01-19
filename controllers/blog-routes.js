const router = require("express").Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth.js");

//  Blog/
// GET All Blog Posts
// ADD WITH AUTH
router.get("/", async (req, res) => {
  const allBlogs = await Blog.findAll({
    include: [{ model: User }],
  }).catch((error) => {
    res.json(error);
  });
  const blogData = allBlogs.map((blog) => blog.get({ plain: true }));
  res.render("blogs", { blogData, loggedIn: req.session.loggedIn });
});

// GET one blog
router.get("/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    res.render("blogs", { blogData });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
