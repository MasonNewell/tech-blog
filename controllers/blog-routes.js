const router = require("express").Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth.js");

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
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const blog = blogData.get({ plain: true });
    res.render("editBlog", {
      blog,
      ...blog,
      // loggedIn: req.session.loggedIn
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!blogData) {
      res.status(404).json({ message: "no blog with that id" });
      return;
    }
    res.status(200).json(blogData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
