const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const helpers = require("./utils/helpers.js");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Set up Express app
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sequelize = require("./config/connection");
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 2000000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//  Middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/index"));

// Start server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
