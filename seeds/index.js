const sequelize = require("../config/connection");
const { User, Blog, Comments } = require("../models");

const userData = require("./userSeed.json");
const blogData = require("./blog-seeds.json");
const commentData = require("./commentSeeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const blogs = await Blog.bulkCreate(blogData);
  const comments = await Comments.bulkCreate(commentData);
  process.exit(0);
};

seedDatabase();
