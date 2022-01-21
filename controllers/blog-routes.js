const router = require("express").Router();
const { User, Blog, Comments } = require("../models");
const withAuth = require("../utils/auth.js");

// GET All Blog Posts
router.get("/", withAuth, async (req, res) => {
  const allBlogs = await Blog.findAll({
    include: [{ model: User }, { model: Comments }],
  }).catch((error) => {
    res.json(error);
  });
  const blogData = allBlogs.map((blog) => blog.get({ plain: true }));
  res.render("blogs", { blogData, loggedIn: req.session.loggedIn });
});

// GET one blog
router.get("/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comments }],
    });
    const blog = blogData.get({ plain: true });
    res.render("editBlog", {
      ...blog,
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a blog
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

// New Blog
router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create({
      post_title: req.body.post_title,
      post_contents: req.body.post_contents,
      user_id: req.session.user_id,
    });
    res.status(200).json(blogData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update
router.put("/:id", async (req, res) => {
  const blogData = await Blog.update(
    {
      post_title: req.body.post_title,
      post_contents: req.body.post_contents,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  return res.json(blogData);
});

// New Comment to Existing Blog
router.post("/:id", async (req, res) => {
  try {
    const commentData = await Comments.create({
      comment: req.body.comment,
      blog_id: req.params.id,
      user_id: req.session.user_id,
    });
    res.status(200).json(commentData);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
