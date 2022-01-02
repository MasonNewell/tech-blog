const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({});

// Set up Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Pass engine property in app.engine method
app.engine("handlebars", hbs.engine);
// set view engine to be handlebars
app.set("view engine", "handlebars");
// ALLOWS additonal method on response object (res.render)

//
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/blog-routes"));

// Start server
app.listen(PORT, () => {
  console.log("Listening on http://localhost:" + PORT);
});
