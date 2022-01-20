const router = require("express").Router();
const { User, Blog } = require("../models");
const withAuth = require("../utils/auth.js");

// GET All Blog Posts
router.get("/", withAuth, async (req, res) => {
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
      loggedIn: req.session.loggedIn,
      ...blog,
      // loggedIn: req.session.loggedIn
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

router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create(req.body);
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

module.exports = router;
