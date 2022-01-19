const router = require("express").Router();
const blogRoutes = require("./blog-routes.js");
const loginRoutes = require("./login.js");
const homeRoutes = require("./home-routes");

router.use("/blogs", blogRoutes);
router.use("/login", loginRoutes);
router.use("/", homeRoutes);

module.exports = router;
