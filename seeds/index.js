const sequelize = require("../config/connection");
const Blog = require("../models/Blog");
const blogData = require("./blog-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
