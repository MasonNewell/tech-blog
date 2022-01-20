const router = require("express").Router();
const blogRoutes = require("./blog-routes.js");
const loginRoutes = require("./login.js");
const logoutRoutes = require("./logout.js");
const homeRoutes = require("./home-routes");

router.use("/blogs", blogRoutes);
router.use("/login", loginRoutes);
router.use("/logout", logoutRoutes);
router.use("/", homeRoutes);

module.exports = router;
