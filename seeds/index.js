const sequelize = require("../config/connection");
const { User, Blog } = require("../models");

const userData = require("./userSeed.json");
const blogData = require("./blog-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const blogs = await Blog.bulkCreate(blogData);

  process.exit(0);
};

seedDatabase();
