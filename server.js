const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

// Set up Express app
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

// Pass engine property in app.engine method
app.engine("handlebars", hbs.engine);
// set view engine to be handlebars
app.set("view engine", "handlebars");
// ALLOWS additonal method on response object (res.render)

//  Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/blog-routes"));

// Start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
